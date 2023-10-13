import { useSelector } from "react-redux";

import { SummaryTable } from "../../components/summary-table";
import { SummaryParagraphList } from "../../components/summary-paragraph-list";
import { TagList } from "../../components/tag-list";
import {
  useGetParagraphsByTagAndDocumentMutation,
  useGetProjectMutation,
} from "../../redux/api";
import { useComponentUpdate } from "../../hooks";

import styles from "./summary-page.module.scss";

export default function SummaryPage() {
  const {
    tagId,
    documentId,
    document: { focusParagraph },
  } = useSelector((state) => ({
    tagId: state.summaryTable.focusTagId,
    documentId: state.summaryTable.focusDocumentId,
    document: state.document,
  }));

  const [, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  const [getParagraphs, { data: paragraphs }] =
    useGetParagraphsByTagAndDocumentMutation({});

  useComponentUpdate(() => {
    getParagraphs({ tagId, documentId });
  }, [tagId, documentId]);

  return (
    <div className={styles.summary_page}>
      <h1 className={styles.summary_page__title}>Project: {project?.name}</h1>
      <SummaryTable />
      {(tagId || documentId) && paragraphs && (
        <SummaryParagraphList paragraphs={paragraphs} />
      )}
      {focusParagraph && (
        <TagList
          paragraph={focusParagraph.paragraph}
          position={focusParagraph.position}
        />
      )}
    </div>
  );
}
