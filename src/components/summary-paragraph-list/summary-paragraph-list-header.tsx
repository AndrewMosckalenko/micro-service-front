import { useSelector } from "react-redux";
import { useGetSummaryTableMutation } from "../../redux/api";
import { ISummaryRow, ITag } from "../../interfaces";

import styles from "./summary-paragraph-list.module.scss";

export function SummaryParagraphListHeader() {
  const tagId = useSelector((state) => state.summaryTable.focusTagId);
  const documentId = useSelector((state) => state.summaryTable.focusDocumentId);

  const [, { data }] = useGetSummaryTableMutation({
    fixedCacheKey: "summary-table",
  });

  if (!data) {
    return "Load";
  }

  const tag = data.header.find((tag: ITag) => tag.id === tagId);
  const document = data.table.find(
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
}
