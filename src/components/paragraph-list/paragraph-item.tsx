import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";

import { IParagraph } from "../../interfaces";
import {
  useDeleteParagraphMutation,
  usePatchParagraphMutation,
} from "../../redux/api";
import { setFocusParagraph } from "../../redux/document-slice";
import { AddIcon, CloseIcon, EditIcon, CustomInput, SaveIcon } from "..";

import styles from "./paragraph-list.module.css";
import { useComponentUpdate } from "../../hooks";

export const ParagraphItem = ({
  paragraph,
  updateCallback,
  onClickAddParagraph,
}: IParagraphItemProps) => {
  const dispatch = useDispatch();
  const focusParagraph = useSelector((state) => state.document?.focusParagraph);

  const [deleteParagraph] = useDeleteParagraphMutation();
  const [patchParagraph] = usePatchParagraphMutation();

  const [editParagraph, setEditParagraph] = useState<boolean>(false);

  const [newParagraphData, setNewParagraphData] = useState({
    name: paragraph.name,
    content: paragraph.content,
  });

  useComponentUpdate(() => {
    if (paragraph.id === focusParagraph?.paragraph.id) {
      dispatch(setFocusParagraph({ ...focusParagraph, paragraph }));
    }
  }, [dispatch, paragraph]);

  const onClickDeleteItem = useCallback(() => {
    deleteParagraph({ id: paragraph.id }).then(updateCallback);
  }, [deleteParagraph, paragraph, updateCallback]);

  const onCLickAddParagraphBtn = useCallback(() => {
    onClickAddParagraph(paragraph.id);
  }, [onClickAddParagraph, paragraph]);

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
  }, [
    setEditParagraph,
    editParagraph,
    newParagraphData,
    paragraph,
    patchParagraph,
    updateCallback,
  ]);

  const onClickParagraph = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      dispatch(
        setFocusParagraph({ paragraph, position: { x: e.pageX, y: e.pageY } }),
      );
      e.stopPropagation();
    },
    [dispatch, paragraph],
  );

  return (
    <div className={styles.paragraph_item}>
      {editParagraph ? (
        <div className={styles.content_wrapper}>
          <CustomInput
            value={newParagraphData.content}
            onChange={onChangeParagraphContent}
            type="multiple"
          />
          <SaveIcon onClick={onClickEditBtn} className={styles.icon} />
          <CloseIcon onClick={onClickDeleteItem} className={styles.icon} />
        </div>
      ) : (
        <div className={styles.content_wrapper}>
          <p
            onClick={onClickParagraph}
            className={classNames(styles.paragraph_item__content, {
              [styles.paragraph_item__content_focus]:
                focusParagraph?.paragraph.id === paragraph.id,
            })}
          >
            {paragraph.content}
          </p>
          <div className={styles.icons}>
            <EditIcon
              onClick={onClickEditBtn}
              className={classNames(styles.icon, styles.icon__paragraph)}
            />
            <AddIcon
              onClick={onCLickAddParagraphBtn}
              className={classNames(styles.icon, styles.icon__paragraph)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export interface IParagraphItemProps {
  paragraph: IParagraph;
  onClickAddParagraph: (value: number) => void;
  updateCallback: () => void;
}
