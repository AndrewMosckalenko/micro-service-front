import { useNavigate, useParams } from "react-router-dom";

import { useComponentUpdate } from "../../hooks";
import { useGetDocumentWithParapgraphsMutation } from "../../redux/api";

import styles from "./document-page.module.css";
import { AddParagraphForm, ParagraphList } from "../../components";

export default function DocumentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [getDocument, { data: document, isLoading }] =
    useGetDocumentWithParapgraphsMutation();

  useComponentUpdate(() => {
    if (isNaN(Number(id))) {
      navigate("/");
    } else {
      getDocument({ id });
    }
  }, [id, navigate, getDocument]);

  useComponentUpdate(() => {
    console.log(document);
  }, [document]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.document_page}>
      <h1>Document: {document?.name}</h1>
      {document && <ParagraphList paragraphs={document.paragraphs} />}
      {id && <AddParagraphForm documentId={Number(id)} />}
    </div>
  );
}
