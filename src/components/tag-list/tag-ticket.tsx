import { useCallback } from "react";

import { ITag } from "../../interfaces";
import { CloseIcon } from "..";

import styles from "./tag-list.module.css";
import { useDeleteTagMutation } from "../../redux/api/tag-api";
import { useGetProjectMutation } from "../../redux/api";
import { useParams } from "react-router-dom";

export const TagTicket = ({ tag, updateCallback }: ITagTicketProps) => {
  const {projectId} = useParams();
  const [deleteTag] = useDeleteTagMutation();
  const [getProject] = useGetProjectMutation({fixedCacheKey: "get-project"})

  const onClickDeleteTagBtn = useCallback(() => {
    deleteTag({ id: tag.id }).then(() => {
      getProject({id: projectId})
    });
  }, [deleteTag, tag, updateCallback]);

  return (
    <div className={styles.tag_ticket} style={{ background: tag.style?.color }}>
      <p>#{tag.title}</p>
      <CloseIcon         
        className={styles.tag_ticket__delete}
        onClick={onClickDeleteTagBtn}
      />
    </div>
  );
};

export interface ITagTicketProps {
  tag: ITag;
  updateCallback: () => void;
}
