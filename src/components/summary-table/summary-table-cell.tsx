import cn from "classnames";
import styles from "./summary-table.module.css";

export function SummaryTableCell({
  children,
  header,
  left,
}: ISummaryTableCellProps) {
  return (
    <div
      className={cn(styles.summary_table__cell, {
        [styles.summary_table__header_cell]: header,
        [styles.summary_table__left_cell]: left,
      })}
    >
      {children}
    </div>
  );
}

export interface ISummaryTableCellProps {
  children?: string;
  header?: boolean;
  left?: boolean;
}
