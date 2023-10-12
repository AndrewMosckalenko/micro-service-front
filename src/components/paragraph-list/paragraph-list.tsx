import { useParams } from "react-router-dom";
import { useCallback, useState } from "react";

import { IParagraph } from "../../interfaces";
import { AddParagraphForm } from "../forms/add-paragraph-form";

import { ParagraphItem } from "./paragraph-item";

import styles from "./paragraph-list.module.scss";

export const ParagraphList = ({
  paragraphs,
  updateCallback,
}: IParagraphListProps) => {
  const { id } = useParams();
  const [newFatherParagraphId, setNewFatherParagraphId] = useState<
    number | null
  >(null);

  const onClickAddParagraph = useCallback(
    (value: number) => {
      setNewFatherParagraphId(value);
    },
    [setNewFatherParagraphId],
  );

  const onClickCancel = useCallback(() => {
    setNewFatherParagraphId(null);
  }, [setNewFatherParagraphId]);

  return (
    <div className={styles.paragraph_list}>
      {paragraphs.map((paragraph: IParagraph) => (
        <>
          <ParagraphItem
            key={paragraph.id}
            paragraph={paragraph}
            updateCallback={updateCallback}
            onClickAddParagraph={onClickAddParagraph}
          />
          {paragraph.id === newFatherParagraphId && (
            <AddParagraphForm
              onClickCancel={onClickCancel}
              nextParagraphId={newFatherParagraphId}
              documentId={Number(id)}
              updateCallback={updateCallback}
            />
          )}
        </>
      ))}
    </div>
  );
};

export interface IParagraphListProps {
  paragraphs: IParagraph[];
  updateCallback: () => void;
}
