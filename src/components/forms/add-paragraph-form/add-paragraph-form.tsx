import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { usePostParagraphMutation } from "../../../redux/api";
import { Button, Input } from "../../ui-components";
import { toastConfig } from "../../../constants";

import styles from "./add-paragraph-form.module.scss";

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
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setNewParagraph((prev) => ({ ...prev, content: target.value }));
    },
    [setNewParagraph],
  );

  const onClickAddBtn = useCallback(() => {
    postParagraph({ id: documentId, name, content, nextParagraphId }).then(
      () => {
        updateCallback();
        toast.success("Paragraph added", toastConfig);
      },
    );
  }, [postParagraph, name, content, documentId, updateCallback]);

  return (
    <div className={styles.addParagraphForm}>
      <Input value={content} onChange={onChangeContent} type="multiple" />
      <div className={styles.addParagraphForm_Btns}>
        <Button onClick={onClickAddBtn} typeButton="pulse">
          create paragraph
        </Button>
        <Button onClick={onClickCancel} typeButton="pulse">
          cancel
        </Button>
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
