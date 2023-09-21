import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useDeleteDocumentMutation } from "../../redux/api";
import { IDocument } from "../../interfaces";
import fileIcon from "../../assets/files.png";
import deleteIcon from "../../assets/delete.png";

import styles from "./document-list.module.css";

export interface IDocumentListItem {
  document: IDocument;
}

export const DocumentListItem = ({ document }: IDocumentListItem) => {
  const navigate = useNavigate();
  const [deleteDocument] = useDeleteDocumentMutation();

  const onClickItem = useCallback(() => {
    navigate(`/${document.id}`);
  }, [navigate, document]);

  const onCLickDeleteItem = useCallback(
    (e: React.MouseEvent) => {
      deleteDocument({ id: document.id });
      e.stopPropagation();
    },
    [deleteDocument, document],
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
      <img
        alt="delete"
        src={deleteIcon}
        className={styles.document_list_item__delete_icon}
        onClick={onCLickDeleteItem}
      />
    </div>
  );
};
