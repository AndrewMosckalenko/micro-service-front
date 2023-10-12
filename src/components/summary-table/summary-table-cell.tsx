import cn from "classnames";
import { Tooltip } from "react-tooltip";

import styles from "./summary-table.module.scss";
import { useMemo } from "react";

export function SummaryTableCell({
  children,
  header,
  left,
}: ISummaryTableCellProps) {
  const { isShort, value } = useMemo(() => {
    if (typeof children === "string" && header) {
      const isShort = children.length > 5;
      return {
        isShort,
        value: `${children.slice(0, 5)}${isShort ? "..." : ""}`,
      };
    } else {
      return {
        isShort: false,
        value: children,
      };
    }
  }, [children, header]);

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
          data-tooltip-id="table_cell_tooltip"
          data-tooltip-content={children}
          data-tooltip-place="top"
          className={styles.summary_table__content}
        >
          {value}
        </a>
      </div>
      {isShort && <Tooltip id="table_cell_tooltip" />}
    </td>
  );
}

export interface ISummaryTableCellProps {
  children?: string;
  header?: boolean;
  left?: boolean;
}
