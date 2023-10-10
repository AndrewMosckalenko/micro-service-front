import cn from "classnames";

import { ITag } from "../../interfaces";
import { SummaryTableCell } from "./summary-table-cell";

import styles from "./summary-table.module.css";

export function SummaryTableHeader({ header }: ISummaryTableHeaderProps) {
  return (
    <div
      className={cn(
        styles.summary_table__row,
        styles.summary_table__row_header,
      )}
    >
      <SummaryTableCell header left />
      {header.map((tag: ITag) => (
        <SummaryTableCell key={tag.id} header>
          {tag.title}
        </SummaryTableCell>
      ))}
    </div>
  );
}

export interface ISummaryTableHeaderProps {
  header: ITag[];
}
