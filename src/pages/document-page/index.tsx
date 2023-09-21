
import { useNavigate, useParams } from 'react-router-dom'

import { useComponentUpdate } from '../../hooks';
import { useGetDocumentWithParapgraphsMutation } from '../../redux/api';

import styles from './document-page.module.css'

export default function DocumentPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [getDocument, { data: document, error, isLoading }] = useGetDocumentWithParapgraphsMutation();

    useComponentUpdate(() => {
        if(isNaN(Number(id))) {
            navigate('/')
        } else {
            getDocument({id})
        }
    }, [id, navigate, getDocument])

    useComponentUpdate(() => {
        console.log(document)
    }, [document])

    return (
        <div className={styles.document_page}>
            { isLoading || document?.name }
        </div>
    )
}