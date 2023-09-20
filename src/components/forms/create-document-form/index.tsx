import { useCallback, useState } from "react";

import { AuthButton, AuthInput } from "../..";
import {
  useGetDocumentsQuery,
  usePostDocumentMutation,
} from "../../../redux/api";

import styles from "./create-document-form.module.css";

export const CreateDocumentForm = () => {
  const [name, setName] = useState("");

  const { refetch } = useGetDocumentsQuery({});
  const [postDocument] = usePostDocumentMutation();

  const onChangeName = useCallback(
    (newName: string) => {
      setName(newName);
    },
    [setName],
  );

  const onClickCreate = useCallback(() => {
    postDocument({ name }).then(() => refetch());
  }, [name, postDocument, refetch]);

  return (
    <div className={styles.create_document_form}>
      <AuthInput
        hint="name of new document"
        onChange={onChangeName}
        value={name}
      />
      <AuthButton onClick={onClickCreate} label="create document" />
    </div>
  );
};
