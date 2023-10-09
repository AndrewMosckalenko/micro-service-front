import { SummaryTable } from "../../components/summary-table";
import { useGetProjectMutation } from "../../redux/api";

import styles from "./summary-page.module.css";

export default function SummaryPage() {
  const [, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  return (
    <div className={styles.summary_page}>
      <h1 className={styles.summary_page__title}>Project: {project?.name}</h1>
      <SummaryTable />
    </div>
  );
}
