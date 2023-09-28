import { CreateDocumentForm, DocumentList } from "../../components";
import { useGetDocumentsQuery } from "../../redux/api";

import styles from "./document-list-page.module.css";

export default function DocumentListPage() {
  const { data: documents, error } = useGetDocumentsQuery({});

  return (
    <div className={styles.document_list_page}>
      <CreateDocumentForm />
      {error && <h1>Didn't load</h1>}
      {documents && <DocumentList documents={documents} />}
    </div>
  );
}
