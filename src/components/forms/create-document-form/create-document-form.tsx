import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

import { Button, Input } from "../../ui-components";
import {
  useGetProjectMutation,
  usePostDocumentMutation,
} from "../../../redux/api";
import { useComponentUpdate } from "../../../hooks";

import styles from "./create-document-form.module.scss";
import { toastConfig } from "../../../constants";

export const CreateDocumentForm = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { projectId } = useParams();

  const [getProject] = useGetProjectMutation({ fixedCacheKey: "get-project" });
  const [postDocument] = usePostDocumentMutation();

  const onChangeName = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setName(target.value);
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
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      if (target.files?.[0]) {
        setFile(target.files[0]);
      }
    },
    [setFile],
  );

  const onClickCreate = useCallback(() => {
    if (name && file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", name);
      postDocument({ data: formData, id: projectId }).then(() => {
        getProject({ id: projectId }),
          toast.success("Document created", toastConfig);
      });
    }
  }, [name, postDocument, file, projectId, getProject]);

  const onClickEnter = useCallback(
    ({ code }: React.KeyboardEvent<HTMLElement>) => {
      if (code === "Enter") {
        onClickCreate();
      }
    },
    [onClickCreate],
  );

  return (
    <div className={styles.createDocumentForm} onKeyDown={onClickEnter}>
      <div className={styles.createDocumentFileLoader}>
        <Input
          placeholder="name of new document"
          onChange={onChangeName}
          value={name}
        />
        <Input onChange={onChangeFile} type="file" />
      </div>
      <Button onClick={onClickCreate} typeButton="pulse">
        create document
      </Button>
    </div>
  );
};
