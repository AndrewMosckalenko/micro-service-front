import cn from 'classnames'
import { Link, useParams } from "react-router-dom";

import styles from "./project-nav-menu.module.scss";

export interface IProjectNavMenuBtnProps {
  title: string;
  link: string;
  isActive?: boolean;
}

export function ProjectNavMenuBtn({
  title,
  isActive,
  link,
}: IProjectNavMenuBtnProps) {
  const { projectId } = useParams();

  return (
    <Link
      to={`/${projectId}/${link}`}
      className={cn(styles.project_nav_btn, {
        [styles.project_nav_btn__active]: isActive,
      })}
      replace
    >
      {title}
    </Link>
  );
}
