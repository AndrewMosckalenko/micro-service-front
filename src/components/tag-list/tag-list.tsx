import { useCallback, useMemo } from "react";

import { IParagraph, IParagraphTag, ITag } from "../../interfaces";
import { useGetProjectMutation } from "../../redux/api";

import { TagTicket } from "./tag-ticket";
import { AddTagTicket } from "./add-tag-ticket";

import styles from "./tag-list.module.scss";

export function TagList({ position, paragraph }: ITagListProps) {
  const [, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  const globalTags = useMemo(
    () =>
      project?.tags && paragraph?.paragraphTags
        ? project.tags.filter(
            (tag: ITag) =>
              !paragraph.paragraphTags.find(
                (paragraphTag: IParagraphTag) => tag.id === paragraphTag.tag.id,
              ),
          )
        : [],
    [project, paragraph],
  );

  const onClickTagList = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <div className={styles.tagListWrapper}>
      <div
        className={styles.tagList}
        style={{ top: position.y + 20, left: position?.x }}
        onClick={onClickTagList}
        tabIndex={0}
      >
        <AddTagTicket paragraph={paragraph} />
        {paragraph?.paragraphTags?.map((paragraphTag: IParagraphTag) => (
          <TagTicket
            key={paragraphTag.tag.id}
            paragraph={paragraph}
            tag={{ ...paragraphTag.tag, id: paragraphTag.id }}
          />
        ))}
        <hr />
        {globalTags?.map((tag: ITag) => (
          <TagTicket key={tag.id} paragraph={paragraph} tag={tag} isGlobal />
        ))}
      </div>
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
