import cn from "classnames";

import { getShortString } from "../../utils";
import { MAX_TAG_LENGTH_ON_HEADER } from "../../constants";

import styles from "./summary-table.module.scss";

export function SummaryTableCell({
  children = "",
  header,
  left,
}: ISummaryTableCellProps) {
  const withTooltip = header || left;

  return (
    <td
      className={cn(styles.summary_table__cell, {
        [styles.summary_table__header_cell]: header,
        [styles.summary_table__left_cell]: left,
      })}
    >
      <div
        className={cn(styles.summary_table__content_wrapper, {
          [styles.summary_table__left_content_wrapper]: left,
        })}
      >
        <a
          data-tooltip-id={withTooltip ? "table_cell_tooltip" : ""}
          data-tooltip-content={children}
          data-tooltip-place="top"
          className={styles.summary_table__content}
        >
          {left ? children : getShortString(children, MAX_TAG_LENGTH_ON_HEADER)}
        </a>
      </div>
    </td>
  );
}

export interface ISummaryTableCellProps {
  children?: string;
  header?: boolean;
  left?: boolean;
}
