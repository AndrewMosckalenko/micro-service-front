import { ITag } from "../../interfaces/tag";
import deleteIcon from "../../assets/delete.png";
import styles from "./paragraph-list.module.css";
import { useDeleteTagMutation } from "../../redux/api";
import { useCallback } from "react";

export const TagTicket = ({ tag, updateCallback }: ITagTicketProps) => {
  const [deleteTag] = useDeleteTagMutation();

  const onClickDeleteTagBtn = useCallback(() => {
    deleteTag({ id: tag.id }).then(updateCallback);
  }, [deleteTag, tag]);

  return (
    <div className={styles.tag_ticket}>
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
