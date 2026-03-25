import { forwardRef } from "react";
import type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
} from "./Card.types";
import styles from "./Card.module.css";
import { cx } from "@/utils";

// ─── CardRoot ─────────────────────────────────────────────────────────────────

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(styles.root, styles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = "Card";

// ─── CardHeader ───────────────────────────────────────────────────────────────

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx(styles.header, className)} {...props}>
        {children}
      </div>
    );
  },
);
CardHeader.displayName = "CardHeader";

// ─── CardTitle ────────────────────────────────────────────────────────────────

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Tag = "h3", className, children, ...props }, ref) => {
    return (
      <Tag ref={ref} className={cx(styles.title, className)} {...props}>
        {children}
      </Tag>
    );
  },
);
CardTitle.displayName = "CardTitle";

// ─── CardDescription ──────────────────────────────────────────────────────────

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, children, ...props }, ref) => {
  return (
    <p ref={ref} className={cx(styles.description, className)} {...props}>
      {children}
    </p>
  );
});
CardDescription.displayName = "CardDescription";

// ─── CardContent ──────────────────────────────────────────────────────────────

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ padding = "md", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cx(styles.content, styles[`padding-${padding}`], className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
CardContent.displayName = "CardContent";

// ─── CardFooter ───────────────────────────────────────────────────────────────

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cx(styles.footer, className)} {...props}>
        {children}
      </div>
    );
  },
);
CardFooter.displayName = "CardFooter";
