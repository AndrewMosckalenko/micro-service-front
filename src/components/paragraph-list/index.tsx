import { IParagraph } from "../../interfaces";
import { ParagraphItem } from "./paragraph-item";
import styles from "./paragraph-list.module.css";

export const ParagraphList = ({ paragraphs, updateCallback }: IParagraphListProps) => {
  return (
    <div className={styles.paragraph_list}>
      {paragraphs.map((paragraph: IParagraph) => (
        <ParagraphItem paragraph={paragraph} updateCallback={updateCallback} />
      ))}
    </div>
  );
};

export interface IParagraphListProps {
  paragraphs: IParagraph[];
  updateCallback: () => void;
}
