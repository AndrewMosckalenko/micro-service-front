import { useCallback, useState } from "react";

import { Button, Input } from "../ui-components";
import { useGetProjectsQuery, usePostProjectMutation } from "../../redux/api";

import styles from "./project-list.module.scss";

export function CreateProjectItem() {
  const [postProject] = usePostProjectMutation({});
  const { refetch } = useGetProjectsQuery({});

  const [newProjectName, setNewProjectName] = useState<string>("");

  const onChangeProjectName = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setNewProjectName(target.value);
    },
    [setNewProjectName],
  );

  const onClickCreateProjectBtn = useCallback(() => {
    postProject({ name: newProjectName }).then(() => {
      refetch();
    });
  }, [postProject, newProjectName, refetch]);

  return (
    <div className={styles.projectListItem}>
      <h3>Create new project</h3>
      <Input
        onChange={onChangeProjectName}
        placeholder="project name"
        value={newProjectName}
      />
      <Button onClick={onClickCreateProjectBtn}>create</Button>
    </div>
  );
}
