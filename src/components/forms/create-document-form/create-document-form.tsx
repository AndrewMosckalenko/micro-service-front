import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";

import { CustomButton, CustomInput } from "../..";
import {
  useGetProjectMutation,
  usePostDocumentMutation,
} from "../../../redux/api";
import { useComponentUpdate } from "../../../hooks";

import styles from "./create-document-form.module.css";

export const CreateDocumentForm = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { projectId } = useParams();

  const [getProject] = useGetProjectMutation({ fixedCacheKey: "get-project" });
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
    if (name && file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      postDocument({ data: formData, id: projectId }).then(() =>
        getProject({ id: projectId }),
      );
    }
  }, [name, postDocument, file, projectId, getProject]);

  const onClickEnter = useCallback(
    (e) => {
      if (e.code === "Enter") {
        onClickCreate();
      }
    },
    [onClickCreate],
  );

  return (
    <div className={styles.create_document_form} onKeyDown={onClickEnter}>
      <div className={styles.create_document__file_loader}>
        <CustomInput
          hint="name of new document"
          onChange={onChangeName}
          value={name}
        />
        <CustomInput onChangeFile={onChangeFile} type="file" />
      </div>
      <CustomButton
        onClick={onClickCreate}
        label="create document"
        type="pulse"
      />
    </div>
  );
};
