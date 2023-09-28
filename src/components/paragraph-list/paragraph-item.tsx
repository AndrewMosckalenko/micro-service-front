import { useCallback, useState } from "react";

import { IParagraph } from "../../interfaces";
import {
  useDeleteParagraphMutation,
  usePatchParagraphMutation,
} from "../../redux/api";
import { TagTicket } from "./tag-ticket";
import { AddTagTicket } from "./add-tag-ticket";
import { AuthInput, MultipleInput } from "..";
import { CloseIcon, EditIcon } from "../svg-icons";

import styles from "./paragraph-list.module.css";

export const ParagraphItem = ({
  paragraph,
  updateCallback,
}: IParagraphItemProps) => {
  const [deleteParagraph] = useDeleteParagraphMutation();
  const [patchParagraph] = usePatchParagraphMutation();

  const [editParagraph, setEditParagraph] = useState<boolean>(false);

  const [newParagraphData, setNewParagraphData] = useState({
    name: paragraph.name,
    content: paragraph.content,
  });

  const onClickDeleteItem = useCallback(() => {
    deleteParagraph({ id: paragraph.id }).then(updateCallback);
  }, [deleteParagraph, paragraph]);

  const onChangeParagraphName = useCallback(
    (value: string) => {
      setNewParagraphData((prev) => ({ ...prev, name: value }));
    },
    [setNewParagraphData],
  );

  const onChangeParagraphContent = useCallback(
    (value: string) => {
      setNewParagraphData((prev) => ({ ...prev, content: value }));
    },
    [setNewParagraphData],
  );

  const onClickEditBtn = useCallback(() => {
    if (editParagraph)
      patchParagraph({ ...newParagraphData, id: paragraph.id }).then(
        updateCallback,
      );
    setEditParagraph((prev) => !prev);
  }, [setEditParagraph, editParagraph, newParagraphData]);

  return (
    <div className={styles.paragraph_item}>
      <div className={styles.paragraph_item__header}>
        <div className={styles.paragraph_item__title_tags}>
          <h3 className={styles.paragraph_item__title}>
            {editParagraph ? (
              <AuthInput
                value={newParagraphData.name}
                onChange={onChangeParagraphName}
              />
            ) : (
              paragraph.name
            )}
          </h3>
          {paragraph.tags.map((tag) => (
            <TagTicket tag={tag} updateCallback={updateCallback} />
          ))}
          <AddTagTicket paragraph={paragraph} updateCallback={updateCallback} />
        </div>
        <div className={styles.paragraph_item__options}>
          <EditIcon className={styles.icon} onClick={onClickEditBtn} />
          <CloseIcon className={styles.icon} onClick={onClickDeleteItem} />
        </div>
      </div>
      {editParagraph ? (
        <MultipleInput
          value={newParagraphData.content}
          onChange={onChangeParagraphContent}
        />
      ) : (
        <p className={styles.paragraph_item__content}>{paragraph.content}</p>
      )}
    </div>
  );
};

export interface IParagraphItemProps {
  paragraph: IParagraph;
  updateCallback: () => void;
}
