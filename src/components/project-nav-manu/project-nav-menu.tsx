import { useLocation } from "react-router-dom";
import {
  IProjectNavMenuBtnProps,
  ProjectNavMenuBtn,
} from "./project-nav-menu-btn";

import styles from "./project-nav-menu.module.css";

export function ProjectNavMenu() {
  const location = useLocation().pathname.split('/')[2]

  const menuItems: IProjectNavMenuBtnProps[] = [
    {
      title: "Documents",
      link: "document",
      focus: location === "document",
    },
    {
      title: "Summary",
      link: "summary",
      focus: location === "summary",
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
