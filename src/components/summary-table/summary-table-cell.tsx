import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { getShortString } from "../../utils";
import { MAX_TAG_LENGTH_ON_HEADER } from "../../constants";
import {
  setFocusDocumentId,
  setFocusTagId,
} from "../../redux/summary-page-slice";

import styles from "./summary-table.module.scss";

export function SummaryTableCell({
  children = "",
  header,
  left,
  tagId,
  documentId,
}: ISummaryTableCellProps) {
  const withTooltip = header || left;

  const dispatch = useDispatch();

  const { tagIdSelected, documentIdSelected } = useSelector((state) => ({
    tagIdSelected: state.summaryTable.focusTagId,
    documentIdSelected: state.summaryTable.focusDocumentId,
  }));

  const onClickCell = () => {
    dispatch(setFocusTagId(tagId));
    dispatch(setFocusDocumentId(documentId));
  };

  return (
    <td
      className={cn(styles.summaryTableCell, {
        [styles.summaryTableSelectedCell]:
          (tagId === tagIdSelected || !tagIdSelected) &&
          (documentId === documentIdSelected || !documentIdSelected) &&
          (tagIdSelected || documentIdSelected),
        [styles.summaryTableHeaderCell]: header,
        [styles.summaryTableLeftCell]: left,
      })}
      onClick={onClickCell}
    >
      <div
        className={cn(styles.summaryTableContentWrapper, {
          [styles.summaryTableLeftContentWrapper]: left,
        })}
      >
        <a
          data-tooltip-id={withTooltip ? "table_cell_tooltip" : ""}
          data-tooltip-content={children}
          data-tooltip-place="top"
          className={styles.summaryTableContent}
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
  tagId?: number;
  documentId?: number;
}
