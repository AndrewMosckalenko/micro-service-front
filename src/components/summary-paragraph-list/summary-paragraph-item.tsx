import { useCallback } from "react";
import { IParagraph } from "../../interfaces";

import styles from "./summary-paragraph-list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setFocusParagraph } from "../../redux/document-slice";
import { useComponentUpdate } from "../../hooks";

export interface ISummaryParagraphItemProps {
  paragraph: IParagraph;
}

export function SummaryParagraphItem({
  paragraph,
}: ISummaryParagraphItemProps) {
  const dispatch = useDispatch();

  const focusParagraph = useSelector((state) => state.document?.focusParagraph);

  const onClickParagraph = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      dispatch(
        setFocusParagraph({ paragraph, position: { x: e.pageX, y: e.pageY } }),
      );
      e.stopPropagation();
    },
    [dispatch, paragraph],
  );

  useComponentUpdate(() => {
    if (paragraph.id === focusParagraph?.paragraph.id) {
      dispatch(setFocusParagraph({ ...focusParagraph, paragraph }));
    }
  }, [dispatch, paragraph, focusParagraph?.paragraph]);

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
