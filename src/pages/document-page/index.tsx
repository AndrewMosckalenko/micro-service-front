import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from "react";

import { useComponentUpdate } from "../../hooks";
import { AddParagraphForm, AuthInput, ParagraphList } from "../../components";
import {
  useCopyDocumentMutation,
  useGetDocumentWithParapgraphsMutation,
  usePatchDocumentMutation,
  useGetDocumentsQuery,
} from "../../redux/api";
import { IDocument } from "../../interfaces";
import { CopyIcon } from "../../components/svg-icons/copy-icon";
import { EditIcon } from "../../components/svg-icons/edit-icon";

import styles from "./document-page.module.css";

export default function DocumentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editDocument, setEditDocument] = useState<boolean>(false);
  const [newDocumentName, setNewDocumentName] = useState<string>("");
  const [currentDocument, setCurrentDocument] = useState<IDocument | null>(
    null,
  );

  const [getDocument, { data: document, isLoading }] =
    useGetDocumentWithParapgraphsMutation();
  const [patchDocument] = usePatchDocumentMutation();
  const [copyDocument] = useCopyDocumentMutation();
  const { refetch } = useGetDocumentsQuery({});

  useComponentUpdate(() => {
    if (isNaN(Number(id))) {
      navigate("/");
    } else {
      getDocument({ id });
    }
  }, [id, navigate, getDocument]);

  useComponentUpdate(() => {
    if (document) setNewDocumentName(document.name);
    if (document && !isLoading) setCurrentDocument(document);
  }, [document]);

  const onCLickEditDocument = useCallback(() => {
    if (editDocument && document)
      patchDocument({ id: document.id, name: newDocumentName }).then(() => {
        getDocument({ id });
      });
    setEditDocument((prev) => !prev);
  }, [setEditDocument, editDocument, document, newDocumentName]);

  const onChangeNewName = useCallback(
    (value: string) => {
      setNewDocumentName(value);
    },
    [setNewDocumentName],
  );

  const updateCallback = useCallback(() => {
    getDocument({ id });
  }, [id, getDocument]);

  const copyDocumentClick = useCallback(() => {
    copyDocument({ id }).then(() => {
      refetch();
    });
  }, [id, copyDocument]);

  if (isLoading && !currentDocument) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.document_page}>
      <h1 className={styles.document_page__title}>
        Document:{" "}
        {editDocument ? (
          <AuthInput
            hint="new name"
            onChange={onChangeNewName}
            value={newDocumentName}
          />
        ) : (
          currentDocument?.name
        )}
        <EditIcon
          className={styles.document_page__edit_icon}
          onClick={onCLickEditDocument}
        />
        <CopyIcon
          width={24}
          height={24}
          className={styles.icon}
          onClick={copyDocumentClick}
        />
      </h1>
      {currentDocument?.paragraphs && (
        <ParagraphList
          paragraphs={currentDocument.paragraphs}
          updateCallback={updateCallback}
        />
      )}
      {id && (
        <AddParagraphForm
          documentId={Number(id)}
          updateCallback={updateCallback}
        />
      )}
    </div>
  );
}
