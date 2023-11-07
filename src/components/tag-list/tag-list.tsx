import { useCallback, useMemo, useState } from "react";

import { IParagraph, IParagraphTag, ITag } from "../../interfaces";
import { useGetProjectMutation } from "../../redux/api";

import { TagTicket } from "./tag-ticket";
import { AddTagTicket } from "./add-tag-ticket";

import styles from "./tag-list.module.scss";
import { useComponentUpdate } from "../../hooks";

export function TagList({ position, paragraph }: ITagListProps) {
  const [, { data: project }] = useGetProjectMutation({
    fixedCacheKey: "get-project",
  });

  const [currentParagraphTags, setCurrentParagraphTags] = useState<
    IParagraphTag[] | null
  >(null);
  const [currentProjectTags, setCurrentProjectTags] = useState<ITag[] | null>(
    null,
  );

  const globalTags = useMemo(
    () =>
      currentProjectTags && currentParagraphTags
        ? currentProjectTags.filter(
            (tag: ITag) =>
              !currentParagraphTags.find(
                (paragraphTag: IParagraphTag) => tag.id === paragraphTag.tag.id,
              ),
          )
        : [],
    [currentProjectTags, currentParagraphTags],
  );

  const onClickTagList = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  }, []);

  useComponentUpdate(() => {
    if (paragraph?.paragraphTags)
      setCurrentParagraphTags(paragraph.paragraphTags);
  }, [setCurrentParagraphTags, paragraph?.paragraphTags]);

  useComponentUpdate(() => {
    if (project?.tags) setCurrentProjectTags(project?.tags);
  }, [setCurrentProjectTags, project?.tags]);

  if (!currentParagraphTags || !currentProjectTags) return <></>;

  return (
    <div className={styles.tagListWrapper}>
      <div
        className={styles.tagList}
        style={{ top: position.y + 20, left: position?.x }}
        onClick={onClickTagList}
        tabIndex={0}
      >
        <AddTagTicket paragraph={paragraph} />
        {currentParagraphTags.map((paragraphTag: IParagraphTag) => (
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
