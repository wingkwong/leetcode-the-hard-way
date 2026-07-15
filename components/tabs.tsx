'use client';

import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useMemo,
  useState,
} from 'react';

type TabItemProps = {
  children: ReactNode;
  label?: ReactNode;
  value: string;
};

export function TabItem({ children }: TabItemProps) {
  return <>{children}</>;
}

export function Tabs({ children }: { children: ReactNode }) {
  const items = useMemo(
    () =>
      Children.toArray(children).filter(isValidElement) as ReactElement<TabItemProps>[],
    [children],
  );
  const [active, setActive] = useState(() => items[0]?.props.value);

  if (items.length === 0) return null;

  const selected = items.find((item) => item.props.value === active) ?? items[0];

  return (
    <div className="mdx-tabs">
      <div className="mdx-tab-list" role="tablist">
        {items.map((item) => {
          const value = item.props.value;
          const isActive = selected.props.value === value;

          return (
            <button
              aria-selected={isActive}
              className="mdx-tab-trigger"
              key={value}
              onClick={() => setActive(value)}
              role="tab"
              type="button"
            >
              {item.props.label ?? value}
            </button>
          );
        })}
      </div>
      <div className="mdx-tab-panel" role="tabpanel">
        {selected.props.children}
      </div>
    </div>
  );
}
