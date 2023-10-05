import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";

import { useGetProjectMutation } from "../../redux/api";
import { IParagraph } from "../../interfaces";
import { usePostTagMutation } from "../../redux/api/tag-api";

import styles from "./tag-list.module.css";

export const AddTagTicket = ({
  paragraph,
  updateCallback,
}: IAddTagTicketProps) => {
  const { projectId } = useParams();
  const [newTag, setNewTag] = useState("");
  const [postTag] = usePostTagMutation();
  const [getProject, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  const onChangeNewTag = useCallback(
    ({ target }) => {
      setNewTag(target.value);
    },
    [setNewTag],
  );

  const onClickAddTagBtn = useCallback(() => {
    postTag({ projectId: project.id, title: newTag }).then(() => {
      getProject({ id: projectId });
    });
  }, [postTag, newTag, project, getProject, projectId]);

  return (
    <div className={styles.add_tag_ticket}>
      <input
        placeholder="new tag"
        onChange={onChangeNewTag}
        value={newTag}
        className={styles.add_tag_ticket__inp}
      />
      <button onClick={onClickAddTagBtn} className={styles.add_tag_ticket__btn}>
        +
      </button>
    </div>
  );
};

export interface IAddTagTicketProps {
  paragraph: IParagraph;
  updateCallback: () => void;
}
