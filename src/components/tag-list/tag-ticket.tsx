import { useCallback } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";

import { IParagraph, ITag } from "../../interfaces";
import { AddIcon, CloseIcon } from "../svg-icons";

import { useDeleteTagMutation } from "../../redux/api/tag-api";
import {
  useDeleteTagFromParagraphMutation,
  useGetDocumentWithParapgraphsMutation,
  useGetProjectMutation,
  usePostTagToParagraphMutation,
} from "../../redux/api";

import styles from "./tag-list.module.scss";

export const TagTicket = ({ tag, paragraph, isGlobal }: ITagTicketProps) => {
  const { projectId, id } = useParams();
  const [deleteTag] = useDeleteTagMutation();
  const [getProject] = useGetProjectMutation({ fixedCacheKey: "get-project" });
  const [getDocument] = useGetDocumentWithParapgraphsMutation({
    fixedCacheKey: "get-document",
  });
  const [postTagToParagraph] = usePostTagToParagraphMutation();
  const [deleteTagFromParagraph] = useDeleteTagFromParagraphMutation();

  const onClickDeleteTagBtn = useCallback(() => {
    if (isGlobal) {
      deleteTag({ id: tag.id }).then(() => {
        getProject({ id: projectId });
      });
      return;
    }
    deleteTagFromParagraph({ id: tag.id }).then(() => {
      getDocument({ id });
      getProject({ id: projectId });
    });
  }, [
    deleteTag,
    tag,
    deleteTagFromParagraph,
    getDocument,
    projectId,
    getProject,
    isGlobal,
    id,
  ]);

  const onClickAddTagToParagraph = useCallback(() => {
    console.log(paragraph);
    postTagToParagraph({ id: paragraph.id, tagId: tag.id }).then(() => {
      getDocument({ id });
      getProject({ id: projectId });
    });
  }, [postTagToParagraph, paragraph, tag, getDocument, id, getProject]);

  return (
    <div
      className={classNames(styles.tagTicket, {
        [styles.tagTicketGlobal]: isGlobal,
      })}
    >
      <p>{tag.title}</p>
      <div className={styles.tagTicketIcons}>
        {isGlobal && (
          <AddIcon
            className={styles.tagTicketDelete}
            onClick={onClickAddTagToParagraph}
          />
        )}
        <CloseIcon
          className={styles.tagTicketDelete}
          onClick={onClickDeleteTagBtn}
        />
      </div>
    </div>
  );
};

export interface ITagTicketProps {
  tag: ITag;
  paragraph: IParagraph;
  isGlobal?: boolean;
}
