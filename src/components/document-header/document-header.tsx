import { useCallback, useState } from "react";
import {
  useCopyDocumentMutation,
  useGetDocumentWithParapgraphsMutation,
  useGetDocumentsQuery,
  usePatchDocumentMutation,
} from "../../redux/api";
import styles from "./document-header.module.css";
import { useDispatch } from "react-redux";
import { AuthInput, CopyIcon, EditIcon } from "..";
import { setDocumentCopiedStatus } from "../../redux/document-slice";
import { useParams } from "react-router-dom";
import { useComponentUpdate } from "../../hooks";

export function DocumentHeader() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [copyDocument] = useCopyDocumentMutation();
  const { refetch } = useGetDocumentsQuery({});
  const [patchDocument] = usePatchDocumentMutation();

  const [editDocument, setEditDocument] = useState<boolean>(false);
  const [newDocumentName, setNewDocumentName] = useState<string>("");
  const [getDocument, { data: document }] =
    useGetDocumentWithParapgraphsMutation({});

  const onChangeNewName = useCallback(
    (value: string) => {
      setNewDocumentName(value);
    },
    [setNewDocumentName],
  );

  const onCLickEditDocument = useCallback(() => {
    if (editDocument && document)
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
  }, [id, copyDocument, refetch]);

  useComponentUpdate(() => {
    getDocument({ id });
  }, [id, getDocument]);

  return (
    <div className={styles.document_page__title}>
      Document:{" "}
      {editDocument ? (
        <AuthInput
          hint="new name"
          onChange={onChangeNewName}
          value={newDocumentName}
        />
      ) : (
        document?.name
      )}
      <EditIcon className={styles.icon} onClick={onCLickEditDocument} />
      <CopyIcon className={styles.icon} onClick={copyDocumentClick} />
    </div>
  );
}
