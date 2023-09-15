import { IDocument } from '../../interfaces';

import file_icon from '../../assets/files.png';
import styles from './document-list.module.css';

export interface IDocumentListItem {
    document: IDocument;
}

export const DocumentListItem = ({document}: IDocumentListItem) => {

    return (
        <div className={styles.document_list_item}>
            <img alt='icon' src={file_icon} className={styles.document_list_item__icon}/>
            <p>{document.name}</p>
        </div>
    )
}