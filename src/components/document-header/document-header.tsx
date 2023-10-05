import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setDocumentCopiedStatus } from "../../redux/document-slice";
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

import styles from "./document-header.module.css";

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
    (value: string) => {
      setNewDocumentName(value);
    },
    [setNewDocumentName],
  );

  const onCLickEditDocument = useCallback(() => {
    if (editDocument && document && newDocumentName)
      patchDocument({ id: document.id, name: newDocumentName }).then(() => {
        getDocument({ id });
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
      dispatch(setDocumentCopiedStatus(true));
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
    <div className={styles.document_page__title}>
      {projectId && project?.name}
      {id && (
        <>
          {" > "}
          {editDocument ? (
            <Input
              hint="new name"
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
