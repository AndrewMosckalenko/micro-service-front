import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { toastConfig } from "../../constants";
import { CopyIcon, EditIcon } from "../svg-icons";
import {
  useCopyDocumentMutation,
  useGetDocumentWithParapgraphsMutation,
  useGetDocumentsQuery,
  useGetProjectMutation,
  usePatchDocumentMutation,
} from "../../redux/api";
import { useComponentUpdate } from "../../hooks";
import { Input } from "../ui-components";

import styles from "./document-header.module.scss";

export function DocumentHeader() {
  const dispatch = useDispatch();
  const { id, projectId } = useParams();
  const [copyDocument] = useCopyDocumentMutation();
  const { refetch } = useGetDocumentsQuery({});
  const [patchDocument] = usePatchDocumentMutation();

  const [editDocument, setEditDocument] = useState<boolean>(false);
  const [newDocumentName, setNewDocumentName] = useState<string>("");
  const [getDocument, { data: document }] =
    useGetDocumentWithParapgraphsMutation({
      fixedCacheKey: "get-document",
    });
  const [getProject, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });
  const onChangeNewName = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setNewDocumentName(target.value);
    },
    [setNewDocumentName],
  );

  const onCLickEditDocument = useCallback(() => {
    if (editDocument && document && newDocumentName)
      patchDocument({ id: document.id, name: newDocumentName }).then(() => {
        getDocument({ id });
        toast.success("Document updated", toastConfig);
      });
    setEditDocument((prev) => !prev);
  }, [
    setEditDocument,
    editDocument,
    document,
    newDocumentName,
    getDocument,
    id,
    patchDocument,
  ]);

  const copyDocumentClick = useCallback(() => {
    copyDocument({ id }).then(() => {
      refetch();
      toast.success("Document copied", toastConfig);
    });
  }, [id, copyDocument, refetch, dispatch]);

  useComponentUpdate(() => {
    if (projectId) getProject({ id: projectId });
  }, [getProject, projectId]);

  useComponentUpdate(() => {
    if (id)
      getDocument({ id }).then(() => {
        setNewDocumentName(document?.name);
      });
  }, [id, getDocument]);

  if (!document?.name) {
    return <></>;
  }

  return (
    <div className={styles.documentPageTitle}>
      {projectId && project?.name}
      {id && (
        <>
          {" > "}
          {editDocument ? (
            <Input
              placeholder="new name"
              onChange={onChangeNewName}
              value={newDocumentName}
            />
          ) : (
            document?.name
          )}
          <EditIcon className={styles.icon} onClick={onCLickEditDocument} />
          <CopyIcon className={styles.icon} onClick={copyDocumentClick} />
        </>
      )}
    </div>
  );
}
