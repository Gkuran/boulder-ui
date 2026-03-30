import type { HTMLAttributes } from "react";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The image URL for the avatar.
   */
  src?: string;
  /**
   * Alt text for the avatar image. Also used to generate initials as fallback.
   */
  alt?: string;
  /**
   * Size of the avatar.
   * @default "md"
   */
  size?: AvatarSize;
}
