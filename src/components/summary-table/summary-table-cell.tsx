import cn from "classnames";
import styles from "./summary-table.module.scss";

export function SummaryTableCell({
  children,
  header,
  left,
}: ISummaryTableCellProps) {
  return (
    <td
      className={cn(styles.summary_table__cell, {
        [styles.summary_table__header_cell]: header,
        [styles.summary_table__left_cell]: left,
      })}
    >
      <p>{children}</p>
    </td>
  );
}

export interface ISummaryTableCellProps {
  children?: string;
  header?: boolean;
  left?: boolean;
}
