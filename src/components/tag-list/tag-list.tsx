import { useCallback, useMemo } from "react";
import _ from "lodash";

import { IParagraph, IParagraphTag, ITag } from "../../interfaces";
import { useGetProjectMutation } from "../../redux/api";

import { TagTicket } from "./tag-ticket";
import { AddTagTicket } from "./add-tag-ticket";

import styles from "./tag-list.module.css";

export function TagList({
  position,
  paragraph,
  updateCallback,
}: ITagListProps) {
  const [, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  const globalTags = useMemo(
    () =>
      project?.tags && paragraph?.paragraphTags
        ? _.differenceWith(
            project?.tags,
            paragraph?.paragraphTags,
            (globalTag: ITag, localTag: IParagraphTag) =>
              globalTag.id === localTag.tag.id,
          )
        : [],
    [project, paragraph],
  );

  const onClickTagList = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);
  return (
    <div
      className={styles.tag_list}
      style={{ top: position.y + 20, left: position?.x }}
      onClick={onClickTagList}
    >
      <AddTagTicket paragraph={paragraph} updateCallback={updateCallback} />
      {paragraph?.paragraphTags?.map((paragraphTag: IParagraphTag) => (
        <TagTicket
          key={paragraphTag.tag.id}
          paragraph={paragraph}
          tag={{ ...paragraphTag.tag, id: paragraphTag.id }}
          updateCallback={updateCallback}
        />
      ))}
      <hr />
      {globalTags?.map((tag: ITag) => (
        <TagTicket
          key={tag.id}
          paragraph={paragraph}
          tag={tag}
          updateCallback={updateCallback}
          isGlobal
        />
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
