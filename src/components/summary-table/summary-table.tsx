import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";

import {
  useGetProjectMutation,
  useGetSummaryTableMutation,
} from "../../redux/api";
import { toastConfig } from "../../constants";
import { useComponentUpdate } from "../../hooks";
import { ISummaryRow, ISummaryTable } from "../../interfaces";

import { SummaryTableHeader } from "./summary-table-haeder";
import { SummaryTableRow } from "./summary-table-row";

import styles from "./summary-table.module.scss";

export const SummaryTable = memo(function () {
  const { projectId } = useParams();

  const [tableData, setTableData] = useState<ISummaryTable | null>(null);

  const [getProjectSummaryTable, { data, error }] = useGetSummaryTableMutation({
    fixedCacheKey: "summary-table",
  });
  const [, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  useComponentUpdate(() => {
    if (projectId) getProjectSummaryTable({ id: projectId });
  }, [projectId, getProjectSummaryTable]);

  useComponentUpdate(() => {
    if (project?.id) getProjectSummaryTable({ id: project.id });
  }, [project, getProjectSummaryTable]);

  useComponentUpdate(() => {
    if (data) {
      setTableData(data);
    }
  }, [data, setTableData]);

  if (!tableData) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    toast.error("Server error", toastConfig);
  }

  return (
    <div className={styles.summaryTable}>
      <table>
        <SummaryTableHeader header={tableData.header} />
        {tableData.table.map((row: ISummaryRow) => (
          <SummaryTableRow key={row.document.id} row={row} />
        ))}
      </table>
      <Tooltip id="table_cell_tooltip" />
    </div>
  );
});
