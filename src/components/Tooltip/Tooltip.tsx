import { useRef, useState, useCallback, useId } from "react";
import type { TooltipProps } from "./Tooltip.types";
import styles from "./Tooltip.module.css";
import { cx } from "@/utils";

export const Tooltip = ({
  content,
  children,
  position = "top",
  delay = 300,
  disabled = false,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipId = useId();

  const show = useCallback(() => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }, [disabled, delay]);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }, []);

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {/* Inject aria-describedby onto the trigger via a wrapper span */}
      <span aria-describedby={visible ? tooltipId : undefined}>
        {children}
      </span>

      {!disabled && (
        <span
          id={tooltipId}
          role="tooltip"
          className={cx(styles.tooltip, styles[position], visible && styles.visible)}
        >
          {content}
        </span>
      )}
    </span>
  );
};

Tooltip.displayName = "Tooltip";
