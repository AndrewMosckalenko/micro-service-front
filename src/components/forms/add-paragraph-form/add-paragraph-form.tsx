import { useCallback, useState } from "react";

import { usePostParagraphMutation } from "../../../redux/api";
import { Button, Input } from "../../ui-components";

import styles from "./add-paragraph-form.module.css";

export const AddParagraphForm = ({
  documentId,
  updateCallback,
  nextParagraphId,
  onClickCancel,
}: IAddParagraphFormProps) => {
  const [postParagraph] = usePostParagraphMutation();

  const [{ name, content }, setNewParagraph] = useState({
    name: "paragraph",
    content: "",
  });

  const onChangeContent = useCallback(
    (content: string) => {
      setNewParagraph((prev) => ({ ...prev, content }));
    },
    [setNewParagraph],
  );

  const onClickAddBtn = useCallback(() => {
    postParagraph({ id: documentId, name, content, nextParagraphId }).then(
      updateCallback,
    );
  }, [postParagraph, name, content, documentId, updateCallback]);

  return (
    <div className={styles.add_paragraph_form}>
      <Input value={content} onChange={onChangeContent} type="multiple" />
      <div className={styles.add_paragraph_form__btns}>
        <Button onClick={onClickAddBtn} label="create paragraph" type="pulse" />
        <Button onClick={onClickCancel} label="cancel" type="pulse" />
      </div>
    </div>
  );
};

export interface IAddParagraphFormProps {
  documentId: number;
  nextParagraphId: number;
  updateCallback: () => void;
  onClickCancel: () => void;
}
