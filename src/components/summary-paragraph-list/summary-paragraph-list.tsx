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
    <div className={styles.summaryParagraphList}>
      <SummaryParagraphListHeader />
      {paragraphs.map((paragraph: IParagraph) => (
        <div key={paragraph.id}>
          <SummaryParagraphItem paragraph={paragraph} />
          <hr />
        </div>
      ))}
    </div>
  );
}
