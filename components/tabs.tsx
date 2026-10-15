'use client';

import {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useId,
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
  const id = useId();
  const items = useMemo(
    () =>
      Children.toArray(children).filter(
        isValidElement,
      ) as ReactElement<TabItemProps>[],
    [children],
  );
  const [active, setActive] = useState(() => items[0]?.props.value);

  if (items.length === 0) return null;

  const selected =
    items.find((item) => item.props.value === active) ?? items[0];

  return (
    <div className="mdx-tabs">
      <div className="mdx-tab-list" role="tablist">
        {items.map((item) => {
          const value = item.props.value;
          const isActive = selected.props.value === value;

          return (
            <button
              aria-controls={`${id}-panel-${value}`}
              aria-selected={isActive}
              className="mdx-tab-trigger"
              id={`${id}-tab-${value}`}
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
      {items.map((item) => (
        <div
          aria-labelledby={`${id}-tab-${item.props.value}`}
          className="mdx-tab-panel"
          hidden={selected.props.value !== item.props.value}
          id={`${id}-panel-${item.props.value}`}
          key={item.props.value}
          role="tabpanel"
        >
          {item.props.children}
        </div>
      ))}
    </div>
  );
}
