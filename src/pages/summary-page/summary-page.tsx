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
import { IParagraph } from "../../interfaces";
import { useState } from "react";

export default function SummaryPage() {
  const reduxData = useSelector((state) => ({
    tagId: state.summaryTable.focusTagId,
    documentId: state.summaryTable.focusDocumentId,
    document: state.document,
  }));

  const [currentProjectName, setCurrentProjectName] = useState<string>("");
  const [currentParagraphs, setCurrentParagraph] = useState<
    IParagraph[] | null
  >(null);

  const [, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  const [getParagraphs, { data: paragraphs }] =
    useGetParagraphsByTagAndDocumentMutation({});

  useComponentUpdate(() => {
    getParagraphs({ tagId: reduxData.tagId, documentId: reduxData.documentId });
    if (!reduxData.tagId && !reduxData.documentId) setCurrentParagraph(null);
  }, [reduxData.tagId, reduxData.documentId, project, setCurrentParagraph]);

  useComponentUpdate(() => {
    if (paragraphs) setCurrentParagraph(paragraphs);
  }, [paragraphs, setCurrentParagraph]);

  useComponentUpdate(() => {
    if (project?.name) setCurrentProjectName(project.name);
  }, [project?.name]);

  return (
    <div className={styles.summary_page}>
      <h1 className={styles.summary_page__title}>
        Project: {currentProjectName}
      </h1>
      <SummaryTable />
      {(reduxData.tagId || reduxData.documentId) && currentParagraphs && (
        <SummaryParagraphList paragraphs={currentParagraphs} />
      )}
      {reduxData.document.focusParagraph && (
        <TagList
          paragraph={reduxData.document.focusParagraph.paragraph}
          position={reduxData.document.focusParagraph.position}
        />
      )}
    </div>
  );
}
