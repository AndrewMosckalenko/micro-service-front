import { useCallback } from "react";
import { IParagraph } from "../../interfaces";

import deleteIcon from "../../assets/delete.png";
import styles from "./paragraph-list.module.css";
import { useDeleteParagraphMutation } from "../../redux/api";

export const ParagraphItem = ({ paragraph }: IParagraphItemProps) => {
  const [deleteParagraph] = useDeleteParagraphMutation();

  const onCLickDeleteItem = useCallback(() => {
    deleteParagraph({ id: paragraph.id });
  }, [deleteParagraph, paragraph]);

  return (
    <div className={styles.paragraph_item}>
      <div className={styles.paragraph_item__header}>
        <h3 className={styles.paragraph_item__title}>{paragraph.name}</h3>
        <img
          src={deleteIcon}
          alt="delete"
          className={styles.paragraph_item__delete}
          onClick={onCLickDeleteItem}
        />
      </div>
      <p className={styles.paragraph_item__content}>{paragraph.content}</p>
    </div>
  );
};

export interface IParagraphItemProps {
  paragraph: IParagraph;
}
