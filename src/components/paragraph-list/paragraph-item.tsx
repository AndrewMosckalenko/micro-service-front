import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";

import { IParagraph } from "../../interfaces";
import {
  useDeleteParagraphMutation,
  usePatchParagraphMutation,
} from "../../redux/api";
import { setFocusParagraph } from "../../redux/document-slice";
import { useComponentUpdate } from "../../hooks";
import { AddIcon, CloseIcon, EditIcon, SaveIcon } from "../svg-icons";
import { Input } from "../ui-components";

import styles from "./paragraph-list.module.scss";

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
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setNewParagraphData((prev) => ({ ...prev, content: target.value }));
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
    <div className={styles.paragraphItem}>
      {paragraph.paragraphTags.length > 0 && (
        <div className={styles.paragraphItemTagCounter}>
          {paragraph.paragraphTags.length}
        </div>
      )}
      {editParagraph ? (
        <div className={styles.contentWrapper}>
          <Input
            value={newParagraphData.content}
            onChange={onChangeParagraphContent}
            type="multiple"
          />
          <SaveIcon onClick={onClickEditBtn} className={styles.icon} />
          <CloseIcon onClick={onClickDeleteItem} className={styles.icon} />
        </div>
      ) : (
        <div className={styles.contentWrapper}>
          <p
            onClick={onClickParagraph}
            className={classNames(styles.paragraphItemContent, {
              [styles.paragraphItemContentFocus]:
                focusParagraph?.paragraph.id === paragraph.id,
            })}
          >
            {paragraph.content}
          </p>
          <div className={styles.icons}>
            <EditIcon
              onClick={onClickEditBtn}
              className={classNames(styles.icon, styles.iconParagraph)}
            />
            <AddIcon
              onClick={onCLickAddParagraphBtn}
              className={classNames(styles.icon, styles.iconParagraph)}
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
