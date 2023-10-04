import { CreateDocumentForm, DocumentList } from "../../components";
import { useGetProjectMutation } from "../../redux/api";

import styles from "./document-list-page.module.css";

export default function DocumentListPage() {
  const [, { data: project, error }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  return (
    <div className={styles.document_list_page}>
      <CreateDocumentForm />
      {error && <h1>Didn't load</h1>}
      {project?.documents && <DocumentList documents={project.documents} />}
    </div>
  );
}
