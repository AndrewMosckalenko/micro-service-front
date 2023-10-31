import { memo } from "react";

import { IDocument } from "../../interfaces";
import { DocumentListItem } from "./document-list-item";
import styles from "./document-list.module.scss";

export const DocumentList = memo(({ documents }: IDocumentListProps) => {
  return (
    <div className={styles.documentList}>
      {documents?.map((document: IDocument) => (
        <DocumentListItem key={document.id} document={document} />
      ))}
    </div>
  );
});

export interface IDocumentListProps {
  documents?: IDocument[];
}
