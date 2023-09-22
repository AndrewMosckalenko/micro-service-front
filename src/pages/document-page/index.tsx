import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from "react";

import { useComponentUpdate } from "../../hooks";
import { AddParagraphForm, AuthInput, ParagraphList } from "../../components";
import { useGetDocumentWithParapgraphsMutation, usePatchDocumentMutation } from "../../redux/api";

import editIcon from '../../assets/draw.png';
import styles from "./document-page.module.css";

export default function DocumentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editDocument, setEditDocument] = useState<boolean>(false)
  const [newDocumentName, setNewDocumentName] = useState<string>('')

  const [getDocument, { data: document, isLoading }] =
    useGetDocumentWithParapgraphsMutation();
  const [patchDocument] = usePatchDocumentMutation();

  useComponentUpdate(() => {
    if (isNaN(Number(id))) {
      navigate("/");
    } else {
      getDocument({ id });
    }
  }, [id, navigate, getDocument]);

  useComponentUpdate(() => {
    if(document) setNewDocumentName(document.name);
  }, [document]);

  const onCLickEditDocument = useCallback(() => {
    if(editDocument && document) patchDocument({id: document.id, name: newDocumentName}).then(() => {getDocument({ id })});
    setEditDocument(prev => !prev)
  }, [setEditDocument, editDocument, document, newDocumentName])

  const onChangeNewName = useCallback((value: string) => {
    setNewDocumentName(value);
  }, [setNewDocumentName])

  const updateCallback = useCallback(() => {
    getDocument({ id })
  }, [id, getDocument])

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.document_page}>
      <h1>Document: {editDocument ? <AuthInput hint="new name" onChange={onChangeNewName} value={newDocumentName}/> : document?.name} <img className={styles.document_page__edit_icon} src={editIcon} onClick={onCLickEditDocument}/></h1>
      {document && <ParagraphList paragraphs={document.paragraphs} updateCallback={updateCallback}/>}
      {id && <AddParagraphForm documentId={Number(id)} updateCallback={updateCallback}/>}
    </div>
  );
}
