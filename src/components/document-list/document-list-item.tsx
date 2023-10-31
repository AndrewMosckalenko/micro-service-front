import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useDeleteDocumentMutation,
  useGetProjectMutation,
} from "../../redux/api";
import { IDocument } from "../../interfaces";
import fileIcon from "../../assets/files.png";
import { CloseIcon } from "../svg-icons";

import styles from "./document-list.module.scss";

export interface IDocumentListItem {
  document: IDocument;
}

export const DocumentListItem = ({ document }: IDocumentListItem) => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [deleteDocument] = useDeleteDocumentMutation();
  const [getProject] = useGetProjectMutation({ fixedCacheKey: "get-project" });

  const onClickItem = useCallback(() => {
    navigate(`/${projectId}/document/${document.id}`);
  }, [navigate, document, projectId]);

  const onCLickDeleteItem = useCallback(
    (e: React.MouseEvent) => {
      deleteDocument({ id: document.id }).then(() => {
        getProject({ id: projectId });
      });
      e.stopPropagation();
    },
    [deleteDocument, document, getProject, projectId],
  );

  return (
    <div className={styles.documentListItem} onClick={onClickItem}>
      <div className={styles.documentListItemFileInfo}>
        <img
          alt="icon"
          src={fileIcon}
          className={styles.documentListItemIcon}
        />
        <p>{document.name}</p>
      </div>
      <CloseIcon
        className={styles.documentListItemDeleteIcon}
        onClick={onCLickDeleteItem}
      />
    </div>
  );
};
