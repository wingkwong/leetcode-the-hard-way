(() => {
  if (globalThis.__lthwConverterContentLoaded) {
    return;
  }
  globalThis.__lthwConverterContentLoaded = true;

const DESCRIPTION_SELECTORS = [
  '[class^="HTMLContent_html__"]',
  '[class*=" HTMLContent_html__"]',
  '[data-key=description-content] [class^=content__]',
];
const TITLE_SELECTORS = [
  "[data-cy='question-title']",
  '[class~="text-title-large"] a',
  '[class~="text-title-large"]',
];
const DIFFICULTY_SELECTORS = ['[diff]', '[class*="text-difficulty-"]'];
const EXTRACT_RETRY_COUNT = 5;
const EXTRACT_RETRY_DELAY_MS = 250;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'extract':
      extractWithRetry().then(sendResponse);
      return true;
  }
});

/**
 * @return {Promise<{
 *   title: string,
 *   href: string,
 *   problem: string,
 *   difficulty: string,
 *   topics: Array.<{ title: string, href: string }>,
 *   questions: Array.<{ title: string, href: string }>,
 * }>}
 */
async function extractWithRetry() {
  for (let attempt = 0; attempt < EXTRACT_RETRY_COUNT; attempt++) {
    const meta = extract();
    if (
      (meta.title && meta.problem && meta.difficulty) ||
      attempt === EXTRACT_RETRY_COUNT - 1
    ) {
      return meta;
    }
    await sleep(EXTRACT_RETRY_DELAY_MS);
  }

  return extract();
}

/**
 * @param {number} delay
 * @return {Promise<void>}
 */
function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

function extract() {
  return {
    title: extractTitle(),
    href: window.location.href,
    problem: extractProblem(),
    difficulty: extractDifficulty(),
    topics: extractTags('[class^=topic-tag__]'),
    questions: extractTags('[class^=question__] [class^=title__]'),
  };
}

/**
 * @return {string}
 */
function extractTitle() {
  for (const selector of TITLE_SELECTORS) {
    const $title = document.querySelector(selector);
    const title = ($title && $title.textContent ? $title.textContent : '').trim();
    if (title) {
      return title;
    }
  }

  return '';
}

/**
 * @return {string}
 */
function extractProblem() {
  const $desp = findDescriptionElement();
  if (!$desp) {
    return '';
  }

  const $problem = document.createElement('div');
  $problem.innerHTML = $desp.innerHTML;

  // pre first. clean any tag inside pre.
  $problem.querySelectorAll('pre').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\n\n\`\`\`\n${content}\n\`\`\`\n\n` : '';
  });
  [
    ...$problem.querySelectorAll('strong'),
    ...$problem.querySelectorAll('b'),
  ].forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `**${content}**` : '';
  });
  [
    ...$problem.querySelectorAll('em'),
    ...$problem.querySelectorAll('i'),
  ].forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `*${content}*` : '';
  });

  $problem.querySelectorAll('code').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\`${content}\`` : '';
  });

  $problem.querySelectorAll('a').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    const href = ($el.getAttribute('href') || '').replace(
      /^\//,
      'https://leetcode.com/',
    );
    $el.outerHTML = `[${content}](${href})`;
  });

  $problem.querySelectorAll('ul').forEach(($ul) => {
    let content = '';
    $ul.querySelectorAll(':scope > li').forEach(($li) => {
      const liContent = ($li.textContent || '').trim();
      if (liContent) {
        content += `- ${liContent}\n`;
      }
    });
    $ul.outerHTML = content;
  });

  $problem.querySelectorAll('ol').forEach(($ol) => {
    let content = '';
    $ol.querySelectorAll(':scope > li').forEach(($li, i) => {
      const liContent = ($li.textContent || '').trim();
      if (liContent) {
        content += `${i + 1}. ${liContent}\n`;
      }
    });
    $ol.outerHTML = content;
  });

  $problem.querySelectorAll('p').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\n\n${content}\n\n` : '';
  });

  $problem.querySelectorAll('div').forEach(($el) => {
    const content = ($el.textContent || '').trim();
    $el.outerHTML = content ? `\n\n${content}\n\n` : '';
  });

  return ($problem.textContent || '').replace(/\n\s*\n/g, '\n\n').trim();
}

/**
 * @return {Element | null}
 */
function findDescriptionElement() {
  for (const selector of DESCRIPTION_SELECTORS) {
    const $desp = document.querySelector(selector);
    if ($desp) {
      return $desp;
    }
  }

  return null;
}

/**
 * @return {string}
 */
function extractDifficulty() {
  for (const selector of DIFFICULTY_SELECTORS) {
    const $difficulty = document.querySelector(selector);
    if (!$difficulty) {
      continue;
    }

    const difficulty = ($difficulty.textContent || '').trim();
    if (difficulty) {
      return difficulty;
    }

    const className = $difficulty.getAttribute('class') || '';
    const match = className.match(/\btext-difficulty-(easy|medium|hard)\b/i);
    if (match) {
      return match[1][0].toUpperCase() + match[1].slice(1).toLowerCase();
    }
  }

  return '';
}

/**
 * @param {string} selector
 * @return {Array.<{{ title: string, href: string }}>}
 */
function extractTags(selector) {
  return [...document.querySelectorAll(selector)]
    .map(($a) => {
      const title = ($a.textContent || '').trim();
      const href = ($a.getAttribute('href') || '').replace(
        /^\//,
        'https://leetcode.com/',
      );
      return title && href ? { title, href } : null;
    })
    .filter(Boolean);
}
})();
