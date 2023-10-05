import { IProject } from "../../interfaces";
import { useGetProjectsQuery } from "../../redux/api";

import { CreateProjectItem } from "./create-project-item";
import { ProjectListItem } from "./project-list-item";

import styles from "./project-list.module.css";

export function ProjectList() {
  const { data } = useGetProjectsQuery({});

  return (
    <div className={styles.project_list}>
      <CreateProjectItem />
      {data?.map((project: IProject) => <ProjectListItem project={project} />)}
    </div>
  );
}
