import { useCallback } from "react";

import { IParagraph, ITag } from "../../interfaces";

import { TagTicket } from "./tag-ticket";
import { AddTagTicket } from "./add-tag-ticket";

import styles from "./tag-list.module.css";

export function TagList({
  position,
  paragraph,
  updateCallback,
}: ITagListProps) {
  const onClickTagList = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);
  return (
    <div
      className={styles.tag_list}
      style={{ top: position.y + 20, left: position.x }}
      onClick={onClickTagList}
    >
      <AddTagTicket paragraph={paragraph} updateCallback={updateCallback} />
      {paragraph.tags.map((tag: ITag) => (
        <TagTicket tag={tag} updateCallback={updateCallback} />
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
  updateCallback: () => void;
}
