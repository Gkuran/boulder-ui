import type {
  HTMLAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

// ─── Header (Root) ───────────────────────────────────────────────────────────

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  /**
   * If true, the header sticks to the top of the viewport on scroll.
   * @default true
   */
  sticky?: boolean;

  /**
   * Visual variant of the header.
   * - `glass`: Translucent background with backdrop blur (Virtu UI default).
   * - `transparent`: No background — layout only.
   * @default "glass"
   */
  variant?: "glass" | "transparent";
}

// ─── HeaderSection ───────────────────────────────────────────────────────────

export interface HeaderSectionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Internal alignment of items within the section.
   * @default "left"
   */
  align?: "left" | "center" | "right";

  /**
   * If true, the section expands to fill remaining horizontal space (flex: 1).
   * Useful for pushing subsequent sections to the right.
   * @default false
   */
  grow?: boolean;
}

// ─── HeaderAction ────────────────────────────────────────────────────────────

interface HeaderActionBaseProps {
  /** Icon element to render inside the action button. */
  icon: ReactNode;

  /**
   * Optional badge count. When provided and greater than 0, a Badge with
   * variant="count" is rendered overlaying the icon.
   */
  badge?: number;

  /**
   * Maximum badge value before showing "max+".
   * @default 99
   */
  badgeMax?: number;
}

/**
 * HeaderAction rendered as a `<button>`.
 * `aria-label` is required for accessibility.
 */
export interface HeaderActionButtonProps
  extends HeaderActionBaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  as?: "button";
  /** Accessible label for screen readers. Required. */
  "aria-label": string;
}

/**
 * HeaderAction rendered as an `<a>`.
 * `aria-label` is required for accessibility.
 */
export interface HeaderActionAnchorProps
  extends HeaderActionBaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  as: "a";
  /** Accessible label for screen readers. Required. */
  "aria-label": string;
}

export type HeaderActionProps =
  | HeaderActionButtonProps
  | HeaderActionAnchorProps;
