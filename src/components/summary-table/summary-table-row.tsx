import { ISummaryCell, ISummaryRow } from "../../interfaces";
import { SummaryTableCell } from "./summary-table-cell";

import styles from "./summary-table.module.css";

export function SummaryTableRow({ row }: ISummaryTableRowProps) {
  return (
    <div className={styles.summary_table__row}>
      <SummaryTableCell left>{row.document.name}</SummaryTableCell>
      {row.tags.map((cell: ISummaryCell) => (
        <SummaryTableCell key={cell.tag.id}>
          {String(cell.count)}
        </SummaryTableCell>
      ))}
    </div>
  );
}

export interface ISummaryTableRowProps {
  row: ISummaryRow;
}
