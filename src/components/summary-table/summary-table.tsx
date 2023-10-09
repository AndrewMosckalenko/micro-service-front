import { useParams } from "react-router-dom";

import { useGetSummaryTableMutation } from "../../redux/api";

import { useComponentUpdate } from "../../hooks";
import { ISummaryRow } from "../../interfaces";

import { SummaryTableHeader } from "./summary-table-haeder";
import { SummaryTableRow } from "./summary-table-row";

import styles from "./summary-table.module.css";

export function SummaryTable() {
  const { projectId } = useParams();
  const [getProjectSummaryTable, { data, error, isLoading }] =
    useGetSummaryTableMutation({});

  useComponentUpdate(() => {
    if (projectId) getProjectSummaryTable({ id: projectId });
  }, [projectId, getProjectSummaryTable]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !data) {
    return <h1>Didn't load</h1>;
  }

  return (
    <div className={styles.summary_table}>
      <SummaryTableHeader header={data.header} />
      {data.table.map((row: ISummaryRow) => (
        <SummaryTableRow key={row.document.id} row={row} />
      ))}
    </div>
  );
}
