import { ISummaryCell, ISummaryRow } from "../../interfaces";
import { SummaryTableCell } from "./summary-table-cell";

import styles from "./summary-table.module.scss";

export function SummaryTableRow({ row }: ISummaryTableRowProps) {
  return (
    <tr className={styles.summaryTableRow}>
      <SummaryTableCell left documentId={row.document.id}>
        {row.document.name}
      </SummaryTableCell>
      {row.tags.map((cell: ISummaryCell) => (
        <SummaryTableCell
          documentId={row.document.id}
          tagId={cell.tag.id}
          key={cell.tag.id}
        >
          {String(cell.count)}
        </SummaryTableCell>
      ))}
    </tr>
  );
}

export interface ISummaryTableRowProps {
  row: ISummaryRow;
}
