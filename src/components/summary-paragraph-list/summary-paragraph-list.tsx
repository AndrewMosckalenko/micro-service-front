import { IParagraph } from "../../interfaces";

import { SummaryParagraphItem } from "./summary-paragraph-item";
import { SummaryParagraphListHeader } from "./summary-paragraph-list-header";

import styles from "./summary-paragraph-list.module.scss";

export interface ISummaryParagraphListProps {
  paragraphs: IParagraph[];
}

export function SummaryParagraphList({
  paragraphs,
}: ISummaryParagraphListProps) {
  return (
    <div className={styles.summary_paragraph_list}>
      <SummaryParagraphListHeader />
      {paragraphs.map((paragraph: IParagraph) => (
        <>
          <SummaryParagraphItem paragraph={paragraph} />
          <hr />
        </>
      ))}
    </div>
  );
}
