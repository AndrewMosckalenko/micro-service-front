import { sortCopy } from "../../helpers/sort-copy";
import { ISummaryCell, ISummaryRow } from "../../interfaces";

import { SummaryTableCell } from "./summary-table-cell";

import styles from "./summary-table.module.scss";

export function SummaryTableRow({ row }: ISummaryTableRowProps) {
  const tagList = sortCopy(row.tags, (a: ISummaryCell, b: ISummaryCell) => a.tag.id - b.tag.id);

  return (
    <tr className={styles.summaryTableRow}>
      <SummaryTableCell left documentId={row.document.id}>
        {row.document.name}
      </SummaryTableCell>
      {tagList.map((cell: ISummaryCell) => (
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
