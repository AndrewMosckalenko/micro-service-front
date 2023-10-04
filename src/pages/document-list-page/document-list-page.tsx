import { useParams } from "react-router-dom";

import { CreateDocumentForm, DocumentList } from "../../components";
import { useComponentUpdate } from "../../hooks";
import { useGetProjectMutation } from "../../redux/api";

import styles from "./document-list-page.module.css";

export default function DocumentListPage() {
  const { projectId } = useParams();
  const [getProject, { data: project, error }] = useGetProjectMutation();

  useComponentUpdate(() => {
    getProject({ id: projectId });
  }, [projectId, getProject]);

  return (
    <div className={styles.document_list_page}>
      <CreateDocumentForm />
      {error && <h1>Didn't load</h1>}
      {project?.documents && <DocumentList documents={project.documents} />}
    </div>
  );
}
