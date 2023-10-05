import { useCallback, useState } from "react";

import { Button, Input } from "../ui-components";
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
      <Input
        onChange={onChangeProjectName}
        hint="project name"
        value={newProjectName}
      />
      <Button label="create" onClick={onClickCreateProjectBtn} />
    </div>
  );
}
