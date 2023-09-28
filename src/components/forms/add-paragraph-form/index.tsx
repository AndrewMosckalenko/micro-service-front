import { useCallback, useState } from "react";

import {
  useGetDocumentWithParapgraphsMutation,
  usePostParagraphMutation,
} from "../../../redux/api";
import { AuthButton, AuthInput, MultipleInput } from "../..";

import styles from "./add-paragraph-form.module.css";

export const AddParagraphForm = ({
  documentId,
  updateCallback,
}: IAddParagraphFormProps) => {
  const [postParagraph] = usePostParagraphMutation();

  const [{ name, content }, setNewParagraph] = useState({
    name: "",
    content: "",
  });

  const onChangeName = useCallback(
    (name: string) => {
      setNewParagraph((prev) => ({ ...prev, name }));
    },
    [setNewParagraph],
  );

  const onChangeContent = useCallback(
    (content: string) => {
      setNewParagraph((prev) => ({ ...prev, content }));
    },
    [setNewParagraph],
  );

  const onClickAddBtn = useCallback(() => {
    postParagraph({ id: documentId, name, content }).then(updateCallback);
  }, [postParagraph, name, content]);

  return (
    <div className={styles.add_paragraph_form}>
      <AuthInput hint="name" value={name} onChange={onChangeName} />
      <MultipleInput value={content} onChange={onChangeContent} />
      <AuthButton onClick={onClickAddBtn} label="create paragraph" />
    </div>
  );
};

export interface IAddParagraphFormProps {
  documentId: number;
  updateCallback: () => void;
}
