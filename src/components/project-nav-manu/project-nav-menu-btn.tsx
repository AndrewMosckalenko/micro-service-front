import cn from "classnames";

import styles from "./project-nav-menu.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export interface IProjectNavMenuBtnProps {
  title: string;
  link: string;
  focus?: boolean;
}

export function ProjectNavMenuBtn({
  title,
  focus,
  link,
}: IProjectNavMenuBtnProps) {
  const navigate = useNavigate();

  const onClickBtn = useCallback(() => {
    navigate(link);
  }, [link, navigate]);

  return (
    <button
      onClick={onClickBtn}
      className={cn(styles.project_nav_btn, {
        [styles.project_nav_btn_focus]: focus,
      })}
    >
      {title}
    </button>
  );
}
