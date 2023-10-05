import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { IProject } from "../../interfaces";

import styles from "./project-list.module.css";

export function ProjectListItem({ project }: IProjectListItemProps) {
  const navigate = useNavigate();

  const onClickItem = useCallback(() => {
    navigate(`/${project.id}/document`);
  }, [navigate, project]);

  return (
    <div className={styles.project_list_item} onClick={onClickItem}>
      <h3>{project.name}</h3>
    </div>
  );
}

export interface IProjectListItemProps {
  project: IProject;
}
