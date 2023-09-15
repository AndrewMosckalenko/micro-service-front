import { DocumentList } from '../../components';

import styles from './document-list-page.module.css';


export default function DocumentListPage() {

    return (
        <div className={styles.document_list_page}>
            <DocumentList />
        </div>
    )
} 