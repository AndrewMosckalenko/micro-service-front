import { useCallback, useState } from "react";

import { useGetProjectMutation } from "../../redux/api";
import { IParagraph } from "../../interfaces";

import styles from "./tag-list.module.css";
import { usePostTagMutation } from "../../redux/api/tag-api";
import { useParams } from "react-router-dom";

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
      getProject({id: projectId })
    });
  }, [paragraph, postTag, newTag, updateCallback, project]);

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
