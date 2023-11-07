import { useSelector } from "react-redux";
import { useGetSummaryTableMutation } from "../../redux/api";
import { ISummaryRow, ISummaryTable, ITag } from "../../interfaces";

import styles from "./summary-paragraph-list.module.scss";
import { memo, useState } from "react";
import { useComponentUpdate } from "../../hooks";

export const SummaryParagraphListHeader = memo(function () {
  const tagId = useSelector((state) => state.summaryTable.focusTagId);
  const documentId = useSelector((state) => state.summaryTable.focusDocumentId);

  const [table, setTable] = useState<ISummaryTable | null>(null);

  const [, { data }] = useGetSummaryTableMutation({
    fixedCacheKey: "summary-table",
  });

  useComponentUpdate(() => {
    if (data) setTable(data);
  }, [data, setTable]);

  if (!table) {
    return "Load";
  }

  const tag = table.header.find((tag: ITag) => tag.id === tagId);
  const document = table.table.find(
    (row: ISummaryRow) => row.document.id === documentId,
  )?.document;

  return (
    <div className={styles.summaryParagraphListHeader}>
      <p>
        Paragraphs {tag && `with tag "${tag.title}" `}
        {document && `on document "${document.name}"`}
      </p>
    </div>
  );
});
