import { CreateDocumentForm } from "../../components/forms/create-document-form";
import { DocumentList } from "../../components/document-list";
import { useGetProjectMutation } from "../../redux/api";

import styles from "./document-list-page.module.scss";

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
