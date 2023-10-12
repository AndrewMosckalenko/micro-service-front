import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";

import {
  useGetProjectMutation,
  useGetDocumentWithParapgraphsMutation,
} from "../../redux/api";
import { IParagraph } from "../../interfaces";
import { usePostTagMutation } from "../../redux/api/tag-api";
import { MAX_TAG_LENGTH_LIMIT } from "../../constants";

import styles from "./tag-list.module.scss";

export const AddTagTicket = ({ paragraph }: IAddTagTicketProps) => {
  const { projectId, id } = useParams();
  const [newTag, setNewTag] = useState("");
  const [postTag] = usePostTagMutation();
  const [getProject, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  const [getDocument] = useGetDocumentWithParapgraphsMutation({
    fixedCacheKey: "get-document",
  });

  const onChangeNewTag = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (target.value.length <= MAX_TAG_LENGTH_LIMIT) {
        setNewTag(target.value);
      }
    },
    [setNewTag],
  );

  const onClickAddTagBtn = useCallback(() => {
    if (newTag?.length > 0) {
      postTag({
        projectId: project.id,
        title: newTag,
        paragraphId: paragraph.id,
      }).then(() => {
        getProject({ id: projectId });
        getDocument({ id });
        setNewTag("");
      });
    }
  }, [postTag, newTag, project, getProject, projectId, setNewTag]);

  const onClickEnter = useCallback(
    ({ code }: React.KeyboardEvent<HTMLElement>) => {
      if (code === "Enter") {
        onClickAddTagBtn();
      }
    },
    [onClickAddTagBtn],
  );

  return (
    <div className={styles.add_tag_ticket}>
      <input
        onKeyDown={onClickEnter}
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
}
