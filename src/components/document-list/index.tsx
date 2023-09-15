
import { DocumentListItem } from './document-list-item'
import styles from './document-list.module.css'

export const DocumentList = () => {

    const docs = [1,2,3,4,5]

    return (
        <div className={styles.document_list}>
            {docs.map(() => (<DocumentListItem document={{
                name: "123",
                paragraphs: null,
            }}/>))}
        </div>
    )
}