import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  useDeleteDocumentMutation,
  useGetDocumentsQuery,
} from "../../redux/api";
import { IDocument } from "../../interfaces";
import fileIcon from "../../assets/files.png";
import { CloseIcon } from "../svg-icons";

import styles from "./document-list.module.css";

export interface IDocumentListItem {
  document: IDocument;
}

export const DocumentListItem = ({ document }: IDocumentListItem) => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [deleteDocument] = useDeleteDocumentMutation();
  const { refetch } = useGetDocumentsQuery({});

  const onClickItem = useCallback(() => {
    navigate(`/${projectId}/document/${document.id}`);
  }, [navigate, document, projectId]);

  const onCLickDeleteItem = useCallback(
    (e: React.MouseEvent) => {
      deleteDocument({ id: document.id }).then(() => {
        refetch();
      });
      e.stopPropagation();
    },
    [deleteDocument, document, refetch],
  );

  return (
    <div className={styles.document_list_item} onClick={onClickItem}>
      <div className={styles.document_list_item__file_info}>
        <img
          alt="icon"
          src={fileIcon}
          className={styles.document_list_item__icon}
        />
        <p>{document.name}</p>
      </div>
      <CloseIcon
        className={styles.document_list_item__delete_icon}
        onClick={onCLickDeleteItem}
      />
    </div>
  );
};
