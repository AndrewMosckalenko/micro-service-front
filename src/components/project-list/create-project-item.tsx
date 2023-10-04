import { useCallback, useState } from "react";

import { AuthButton, AuthInput } from "..";
import { useGetProjectsQuery, usePostProjectMutation } from "../../redux/api";

import styles from "./project-list.module.css";

export function CreateProjectItem() {
  const [postProject] = usePostProjectMutation({});
  const { refetch } = useGetProjectsQuery({});

  const [newProjectName, setNewProjectName] = useState<string>("");

  const onChangeProjectName = useCallback(
    (value: string) => {
      setNewProjectName(value);
    },
    [setNewProjectName],
  );

  const onClickCreateProjectBtn = useCallback(() => {
    postProject({ name: newProjectName }).then(() => {
      refetch();
    });
  }, [postProject, newProjectName, refetch]);

  return (
    <div className={styles.project_list_item}>
      <h3>Create new project</h3>
      <AuthInput
        onChange={onChangeProjectName}
        hint="project name"
        value={newProjectName}
      />
      <AuthButton label="create" onClick={onClickCreateProjectBtn} />
    </div>
  );
}
