import { useCallback } from "react";
import { IParagraph } from "../../interfaces";

import styles from "./summary-paragraph-list.module.scss";
import { useDispatch } from "react-redux";
import { setFocusParagraph } from "../../redux/document-slice";

export interface ISummaryParagraphItemProps {
  paragraph: IParagraph;
}

export function SummaryParagraphItem({
  paragraph,
}: ISummaryParagraphItemProps) {
  const dispatch = useDispatch();

  const onClickParagraph = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      dispatch(
        setFocusParagraph({ paragraph, position: { x: e.pageX, y: e.pageY } }),
      );
      e.stopPropagation();
    },
    [dispatch, paragraph],
  );

  return (
    <div className={styles.summaryParagraphItem}>
      <div
        className={styles.summaryParagraphItemTagCount}
        onClick={onClickParagraph}
      >
        {paragraph.paragraphTags.length}
      </div>
      <p className={styles.summaryParagraphItemContent}>{paragraph.content}</p>
    </div>
  );
}
