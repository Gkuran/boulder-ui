import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useId,
  useState,
} from "react";
import type {
  TabsContentProps,
  TabsListProps,
  TabsRootProps,
  TabsTriggerProps,
} from "./Tabs.types";
import styles from "./Tabs.module.css";
import { cx } from "@/utils";

// ─── TabsRoot ─────────────────────────────────────────────────────────────────
export const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  (
    {
      defaultValue,
      value: controlledValue,
      onValueChange,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const isControlled = controlledValue !== undefined;
    const selectedValue = isControlled ? controlledValue : internalValue;

    const handleSelect = useCallback(
      (val: string) => {
        if (!isControlled) setInternalValue(val);
        onValueChange?.(val);
      },
      [isControlled, onValueChange],
    );

    return (
      <div ref={ref} className={cx(styles.root, className)} {...props}>
        {Children.map(children, (child) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
            _selectedValue: selectedValue,
            _onSelect: handleSelect,
          });
        })}
      </div>
    );
  },
);
TabsRoot.displayName = "TabsRoot";

// ─── TabsList ─────────────────────────────────────────────────────────────────
export const TabsList = forwardRef<HTMLDivElement, TabsListProps & { _selectedValue?: string; _onSelect?: (v: string) => void }>(
  ({ children, className, _selectedValue, _onSelect, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      className={cx(styles.list, className)}
      {...props}
    >
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as React.ReactElement<Record<string, unknown>>, {
          _selectedValue,
          _onSelect,
        });
      })}
    </div>
  ),
);
TabsList.displayName = "TabsList";

// ─── TabsTrigger ──────────────────────────────────────────────────────────────
export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  (
    {
      value,
      disabled = false,
      children,
      className,
      _selectedValue,
      _onSelect,
      onClick,
      ...props
    },
    ref,
  ) => {
    const isActive = _selectedValue === value;
    const panelId = `panel-${value}`;
    const tabId = useId();

    return (
      <button
        ref={ref}
        id={tabId}
        role="tab"
        type="button"
        aria-selected={isActive}
        aria-controls={panelId}
        tabIndex={isActive ? 0 : -1}
        disabled={disabled}
        className={cx(styles.trigger, isActive && styles.active, className)}
        onClick={(e) => {
          _onSelect?.(value);
          onClick?.(e);
        }}
        onKeyDown={(e) => {
          // Arrow key navigation within tablist
          const list = e.currentTarget.closest('[role="tablist"]');
          if (!list) return;
          const tabs = Array.from(list.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])'));
          const idx = tabs.indexOf(e.currentTarget);
          if (e.key === "ArrowRight") {
            tabs[(idx + 1) % tabs.length]?.focus();
          } else if (e.key === "ArrowLeft") {
            tabs[(idx - 1 + tabs.length) % tabs.length]?.focus();
          } else if (e.key === "Home") {
            tabs[0]?.focus();
          } else if (e.key === "End") {
            tabs[tabs.length - 1]?.focus();
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  },
);
TabsTrigger.displayName = "TabsTrigger";

// ─── TabsContent ──────────────────────────────────────────────────────────────
export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, children, className, _selectedValue, ...props }, ref) => {
    if (_selectedValue !== value) return null;
    return (
      <div
        ref={ref}
        id={`panel-${value}`}
        role="tabpanel"
        tabIndex={0}
        className={cx(styles.content, className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TabsContent.displayName = "TabsContent";

// ─── Namespace export ─────────────────────────────────────────────────────────
export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};
