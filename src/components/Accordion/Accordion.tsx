import { createContext, forwardRef, useContext, useId, useState } from "react";
import type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerProps,
} from "./Accordion.types";
import styles from "./Accordion.module.css";
import { cx } from "@/utils";

// ─── Context ──────────────────────────────────────────────────────────────────

interface AccordionItemContextValue {
  triggerId: string;
  panelId: string;
  isOpen: boolean;
  disabled: boolean;
  toggle: () => void;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(
  null,
);

function useAccordionItem(componentName: string): AccordionItemContextValue {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      `<${componentName}> must be used inside an <AccordionItem>.`,
    );
  }
  return ctx;
}

// ─── AccordionRoot ────────────────────────────────────────────────────────────

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { variant = "default", width = "full", className, children, ...props },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cx(
          styles.root,
          styles[variant],
          styles[`width-${width}`],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Accordion.displayName = "Accordion";

// ─── AccordionItem ────────────────────────────────────────────────────────────

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      defaultOpen = false,
      open: controlledOpen,
      onOpenChange,
      disabled = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const triggerId = `${generatedId}-trigger`;
    const panelId = `${generatedId}-panel`;

    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);

    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const toggle = () => {
      if (disabled) return;
      if (isControlled) {
        onOpenChange?.(!isOpen);
      } else {
        setUncontrolledOpen((prev) => !prev);
        onOpenChange?.(!isOpen);
      }
    };

    return (
      <AccordionItemContext.Provider
        value={{ triggerId, panelId, isOpen, disabled, toggle }}
      >
        <div
          ref={ref}
          className={cx(
            styles.item,
            isOpen && styles.itemOpen,
            disabled && styles.itemDisabled,
            className,
          )}
          data-open={isOpen || undefined}
          data-disabled={disabled || undefined}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  },
);
AccordionItem.displayName = "AccordionItem";

// ─── AccordionTrigger ─────────────────────────────────────────────────────────

export const AccordionTrigger = forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => {
  const { triggerId, panelId, isOpen, disabled, toggle } =
    useAccordionItem("AccordionTrigger");

  return (
    <button
      ref={ref}
      id={triggerId}
      type="button"
      aria-expanded={isOpen}
      aria-controls={panelId}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={cx(styles.trigger, isOpen && styles.triggerOpen, className)}
      onClick={toggle}
      {...props}
    >
      <span className={styles.triggerLabel}>{children}</span>
      <span className={styles.icon} aria-hidden="true">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6L8 11L13 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

// ─── AccordionContent ─────────────────────────────────────────────────────────

export const AccordionContent = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => {
  const { panelId, triggerId, isOpen } = useAccordionItem("AccordionContent");

  return (
    <div
      ref={ref}
      id={panelId}
      role="region"
      aria-labelledby={triggerId}
      hidden={!isOpen}
      className={cx(styles.content, isOpen && styles.contentOpen, className)}
      {...props}
    >
      <div className={styles.contentInner}>{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";
