import { useLocation, useParams } from "react-router-dom";
import {
  IProjectNavMenuBtnProps,
  ProjectNavMenuBtn,
} from "./project-nav-menu-btn";

import styles from "./project-nav-menu.module.scss";

const menuItems: IProjectNavMenuBtnProps[] = [
  {
    title: "Documents",
    link: "document",
  },
  {
    title: "Summary",
    link: "summary",
  },
];

export function ProjectNavMenu() {
  const { location } = useParams();

  return (
    <div className={styles.projectNavMenu}>
      {menuItems.map((btnProps: IProjectNavMenuBtnProps) => (
        <ProjectNavMenuBtn
          key={btnProps.link}
          {...btnProps}
          isActive={location === btnProps.link}
        />
      ))}
    </div>
  );
}
