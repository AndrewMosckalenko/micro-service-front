import { useCallback } from "react";

import { useDeleteTagMutation } from "../../redux/api";
import { ITag } from "../../interfaces";
import deleteIcon from "../../assets/delete.png";

import styles from "./tag-list.module.css";

export const TagTicket = ({ tag, updateCallback }: ITagTicketProps) => {
  const [deleteTag] = useDeleteTagMutation();

  const onClickDeleteTagBtn = useCallback(() => {
    deleteTag({ id: tag.id }).then(updateCallback);
  }, [deleteTag, tag, updateCallback]);

  return (
    <div className={styles.tag_ticket} style={{ background: tag.style?.color }}>
      <p>#{tag.title}</p>
      <img
        src={deleteIcon}
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
