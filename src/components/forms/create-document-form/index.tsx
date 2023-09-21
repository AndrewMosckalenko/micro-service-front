import { useCallback, useState } from "react";

import { AuthButton, AuthInput, FileInput } from "../..";
import {
  useGetDocumentsQuery,
  usePostDocumentMutation,
} from "../../../redux/api";

import styles from "./create-document-form.module.css";
import { useComponentUpdate } from "../../../hooks";

export const CreateDocumentForm = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const { refetch } = useGetDocumentsQuery({});
  const [postDocument] = usePostDocumentMutation();

  const onChangeName = useCallback(
    (newName: string) => {
      setName(newName);
    },
    [setName],
  );

  useComponentUpdate(() => {
    if (file) {
      setName(file.name);
    } else {
      setName("");
    }
  }, [setName, file]);

  const onChangeFile = useCallback(
    (newFile: File) => {
      setFile(newFile);
    },
    [setFile],
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
      <FileInput onChangeFile={onChangeFile} />
      <AuthButton onClick={onClickCreate} label="create document" />
    </div>
  );
};
