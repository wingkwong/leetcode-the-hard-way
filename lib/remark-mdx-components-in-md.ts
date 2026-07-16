const componentNames = new Set([
  'Tabs',
  'TabItem',
  'SolutionAuthor',
  'TutorialCredits',
]);

type MdxAttribute = {
  type: 'mdxJsxAttribute';
  name: string;
  value: string | null;
};

type MdxNode = {
  type: string;
  value?: string;
  name?: string;
  attributes?: MdxAttribute[];
  children?: MdxNode[];
  [key: string]: unknown;
};

type MdxElement = MdxNode & {
  type: 'mdxJsxFlowElement';
  name: string;
  attributes: MdxAttribute[];
  children: MdxNode[];
};

type ComponentToken =
  | { type: 'close'; name: string }
  | { type: 'open'; element: MdxElement }
  | { type: 'self'; element: MdxElement };

type Token = ComponentToken | { type: 'node'; node: MdxNode };

export function remarkMdxComponentsInMd() {
  return (tree: MdxNode) => {
    transformNode(tree);
  };
}

function transformNode(node: MdxNode) {
  if (!node.children) return;

  node.children = transformChildren(node.children);

  for (const child of node.children) {
    transformNode(child);
  }
}

function transformChildren(children: MdxNode[]) {
  const tokens: Token[] = [];
  let hasComponent = false;

  for (const child of children) {
    const componentTokens =
      child.type === 'html' && typeof child.value === 'string'
        ? parseComponentHtml(child.value)
        : null;

    if (!componentTokens) {
      tokens.push({ type: 'node', node: child });
      continue;
    }

    hasComponent = true;
    tokens.push(...componentTokens);
  }

  if (!hasComponent) return children;

  const root = { children: [] as MdxNode[], name: null as string | null };
  const stack: Array<typeof root | MdxElement> = [root];

  for (const token of tokens) {
    const current = stack[stack.length - 1];

    if (token.type === 'node') {
      current.children.push(token.node);
      continue;
    }

    if (token.type === 'self') {
      current.children.push(token.element);
      continue;
    }

    if (token.type === 'open') {
      current.children.push(token.element);
      stack.push(token.element);
      continue;
    }

    if (stack.length === 1 || stack[stack.length - 1].name !== token.name) {
      return children;
    }

    stack.pop();
  }

  return stack.length === 1 ? root.children : children;
}

function parseComponentHtml(value: string): ComponentToken[] | null {
  const lines = value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) return null;

  const tokens: ComponentToken[] = [];

  for (const line of lines) {
    const closing = line.match(/^<\/([A-Z][A-Za-z]*)>$/);
    if (closing) {
      const [, name] = closing;
      if (!componentNames.has(name)) return null;
      tokens.push({ type: 'close', name });
      continue;
    }

    const opening = line.match(/^<([A-Z][A-Za-z]*)([^>]*)>$/);
    if (!opening) return null;

    const [, name, rawAttributes] = opening;
    if (!componentNames.has(name)) return null;

    const selfClosing = rawAttributes.trimEnd().endsWith('/');
    const attributes = parseAttributes(
      selfClosing ? rawAttributes.trimEnd().slice(0, -1) : rawAttributes,
    );

    if (!attributes) return null;

    const element: MdxElement = {
      type: 'mdxJsxFlowElement',
      name,
      attributes,
      children: [],
    };

    tokens.push(selfClosing ? { type: 'self', element } : { type: 'open', element });
  }

  return tokens;
}

function parseAttributes(value: string): MdxAttribute[] | null {
  const attributes: MdxAttribute[] = [];
  const consumed = value.replace(
    /([A-Za-z_$][\w$-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g,
    (_match, name: string, doubleQuoted: string, singleQuoted: string) => {
      attributes.push({
        type: 'mdxJsxAttribute',
        name,
        value: doubleQuoted ?? singleQuoted,
      });

      return '';
    },
  );

  return consumed.trim() === '' ? attributes : null;
}
