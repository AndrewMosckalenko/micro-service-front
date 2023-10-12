import { ISummaryCell, ISummaryRow } from "../../interfaces";
import { SummaryTableCell } from "./summary-table-cell";

import styles from "./summary-table.module.scss";

export function SummaryTableRow({ row }: ISummaryTableRowProps) {
  return (
    <tr className={styles.summary_table__row}>
      <SummaryTableCell left>{row.document.name}</SummaryTableCell>
      {row.tags.map((cell: ISummaryCell) => (
        <SummaryTableCell key={cell.tag.id}>
          {String(cell.count)}
        </SummaryTableCell>
      ))}
    </tr>
  );
}

export interface ISummaryTableRowProps {
  row: ISummaryRow;
}
