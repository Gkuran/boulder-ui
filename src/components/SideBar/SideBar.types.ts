import type { ReactNode } from "react";

export interface SideBarProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Logo or brand element rendered at the top of the sidebar.
   * Accepts any ReactNode (img, SVG, icon component).
   */
  logo?: ReactNode;

  /**
   * Navigation items. Should be SideBarItem components.
   */
  children: ReactNode;
}
