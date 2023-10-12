import { ProjectList } from "../../components/project-list";
import styles from "./project-list-page.module.scss";

export default function ProjectListPage() {
  return (
    <div className={styles.project_list_page}>
      <ProjectList />
    </div>
  );
}
