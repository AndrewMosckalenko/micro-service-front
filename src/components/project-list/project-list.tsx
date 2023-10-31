import { IProject } from "../../interfaces";
import { useGetProjectsQuery } from "../../redux/api";

import { CreateProjectItem } from "./create-project-item";
import { ProjectListItem } from "./project-list-item";

import styles from "./project-list.module.scss";

export function ProjectList() {
  const { data } = useGetProjectsQuery({});

  return (
    <div className={styles.projectList}>
      <CreateProjectItem />
      {data?.map((project: IProject) => <ProjectListItem project={project} />)}
    </div>
  );
}
