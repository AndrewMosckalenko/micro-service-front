import { useNavigate, useParams } from "react-router-dom";
import { useRef } from "react";

import { useComponentUpdate } from "../../hooks";

import styles from "./project-nav-menu.module.css";

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
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { projectId } = useParams();

  const onClickBtn = () => {
    navigate(`/${projectId}/${link}`, { replace: true });
  };

  useComponentUpdate(() => {
    if (buttonRef.current) buttonRef.current.disabled = !!isActive;
  }, [isActive, buttonRef]);

  return (
    <button
      ref={buttonRef}
      onClick={onClickBtn}
      className={styles.project_nav_btn}
    >
      {title}
    </button>
  );
}
