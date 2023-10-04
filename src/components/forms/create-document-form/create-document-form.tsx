import { useCallback, useState } from "react";

import { AuthButton, AuthInput, FileInput } from "../..";
import {
  useGetDocumentsQuery,
  usePostDocumentMutation,
} from "../../../redux/api";

import styles from "./create-document-form.module.css";
import { useComponentUpdate } from "../../../hooks";
import { useParams } from "react-router-dom";

export const CreateDocumentForm = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { projectId } = useParams();

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
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    postDocument({ data: formData, id: projectId }).then(() => refetch());
  }, [name, postDocument, refetch, file, projectId]);

  return (
    <div className={styles.create_document_form}>
      <div className={styles.create_document__file_loader}>
        <AuthInput
          hint="name of new document"
          onChange={onChangeName}
          value={name}
        />
        <FileInput onChangeFile={onChangeFile} />
      </div>
      <AuthButton onClick={onClickCreate} label="create document" />
    </div>
  );
};
