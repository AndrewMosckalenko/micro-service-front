import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { DocumentList } from '../../components';
import { documentsFromDocumentsReducerSelector } from '../../redux/reducers/selectors';
import { requestDocumentsAction } from '../../redux/actions';

import styles from './document-list-page.module.css';

export default function DocumentListPage() {

    const dispatch = useDispatch()

    const documents = useSelector(documentsFromDocumentsReducerSelector);

    useEffect(() => {
        dispatch(requestDocumentsAction());
    }, [dispatch]);

    return (
        <div className={styles.document_list_page}>
            <DocumentList documents={documents || []}/>
        </div>
    )
} 