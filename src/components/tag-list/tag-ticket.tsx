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

import styles from "./tag-list.module.css";

export const TagTicket = ({
  tag,
  updateCallback,
  paragraph,
  isGlobal,
}: ITagTicketProps) => {
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
    });
  }, [
    deleteTag,
    tag,
    updateCallback,
    deleteTagFromParagraph,
    getDocument,
    projectId,
    getProject,
    isGlobal,
    id,
  ]);

  const onClickAddTagToParagraph = useCallback(() => {
    postTagToParagraph({ id: paragraph.id, tagId: tag.id }).then(() => {
      getDocument({ id });
    });
  }, [postTagToParagraph, paragraph, tag, getDocument, id]);

  return (
    <div
      className={classNames(styles.tag_ticket, {
        [styles.tag_ticket_global]: isGlobal,
      })}
    >
      <p>#{tag.title}</p>
      {isGlobal && (
        <AddIcon
          className={styles.tag_ticket__delete}
          onClick={onClickAddTagToParagraph}
        />
      )}
      <CloseIcon
        className={styles.tag_ticket__delete}
        onClick={onClickDeleteTagBtn}
      />
    </div>
  );
};

export interface ITagTicketProps {
  tag: ITag;
  paragraph: IParagraph;
  isGlobal?: boolean;
  updateCallback: () => void;
}
