import {
  IProjectNavMenuBtnProps,
  ProjectNavMenuBtn,
} from "./project-nav-menu-btn";

import styles from "./project-nav-menu.module.css";
import { useState } from "react";

export function ProjectNavMenu() {
  const [focusItem, setFocusItem] = useState<string>();

  const menuItems: IProjectNavMenuBtnProps[] = [
    {
      title: "Documents",
      link: "document",
      focus: focusItem === "Documents",
      onClick: setFocusItem,
    },
    {
      title: "Summary",
      link: "summary",
      focus: focusItem === "Summary",
      onClick: setFocusItem,
    },
  ];

  return (
    <div className={styles.project_nav_menu}>
      {menuItems.map((btnProps: IProjectNavMenuBtnProps) => (
        <ProjectNavMenuBtn {...btnProps} />
      ))}
    </div>
  );
}
