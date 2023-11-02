import cn from "classnames";

import { ITag } from "../../interfaces";
import { SummaryTableCell } from "./summary-table-cell";

import styles from "./summary-table.module.scss";

export function SummaryTableHeader({ header }: ISummaryTableHeaderProps) {
  return (
    <tr className={cn(styles.summaryTableRow, styles.summaryTableRowHeader)}>
      <SummaryTableCell header left />
      {header.map((tag: ITag) => (
        <SummaryTableCell tagId={tag.id} key={tag.id} header>
          {tag.title}
        </SummaryTableCell>
      ))}
    </tr>
  );
}

export interface ISummaryTableHeaderProps {
  header: ITag[];
}
