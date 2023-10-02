import { ITag } from "../../interfaces/tag";
import { IParagraph } from "../../interfaces";

import { TagTicket } from "./tag-ticket";
import { AddTagTicket } from "./add-tag-ticket";

import styles from "./paragraph-list.module.css";
import { useEffect } from "react";

export function TagList({ position, paragraph }: ITagListProps) {
  useEffect(() => {
    console.log(paragraph);
  }, [paragraph]);

  return (
    <div
      className={styles.tag_list}
      style={{ top: position.y + 20, left: position.x }}
    >
      <AddTagTicket paragraph={paragraph} updateCallback={() => {}} />
      {paragraph.tags.map((tag: ITag) => (
        <TagTicket tag={tag} updateCallback={() => {}} />
      ))}
    </div>
  );
}

export interface ITagListProps {
  paragraph: IParagraph;
  position: {
    x: number;
    y: number;
  };
}
