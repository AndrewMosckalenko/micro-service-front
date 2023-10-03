import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useComponentUpdate } from "../../hooks";
import {
  AddParagraphForm,
  AuthInput,
  ParagraphList,
  CopyIcon,
  EditIcon,
  ActionForm,
  TagList,
} from "../../components";
import {
  useCopyDocumentMutation,
  useGetDocumentWithParapgraphsMutation,
  useGetDocumentsQuery,
  usePatchDocumentMutation,
} from "../../redux/api";
import { setDocumentCopiedStatus } from "../../redux/document-slice";
import { IDocument } from "../../interfaces";

import styles from "./document-page.module.css";

export default function DocumentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { focusParagraph, documentCopied } = useSelector(
    (state) => state.document,
  );

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

  useComponentUpdate(() => {
    console.log(focusParagraph);
  }, [focusParagraph]);

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
      dispatch(setDocumentCopiedStatus(true));
    });
  }, [id, copyDocument, refetch]);

  const onCLickActionForm = useCallback(() => {
    dispatch(setDocumentCopiedStatus(false));
  }, [dispatch]);

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
        <EditIcon className={styles.icon} onClick={onCLickEditDocument} />
        <CopyIcon className={styles.icon} onClick={copyDocumentClick} />
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
      {focusParagraph && (
        <TagList
          paragraph={focusParagraph.paragraph}
          position={focusParagraph.position}
          updateCallback={updateCallback}
        />
      )}
      {documentCopied && (
        <ActionForm label="Document copied" onClick={onCLickActionForm} />
      )}
    </div>
  );
}
