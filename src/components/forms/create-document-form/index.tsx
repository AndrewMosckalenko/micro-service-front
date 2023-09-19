import { useCallback, useState } from "react"
import { AuthButton, AuthInput } from "../.."

import styles from './create-document-form.module.css'
import { useDispatch } from "react-redux"
import { requestPostDocumentAction } from "../../../redux/actions"

export const CreateDocumentForm = () => {
    
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const onChangeName = useCallback((val: string) => {
        setName(val)
    }, [setName])

    const onClickCreate = useCallback(() => {
        dispatch(requestPostDocumentAction(name))
    }, [dispatch, name]);

    return (
        <div className={styles.create_document_form}>
            <AuthInput hint='name of new document' onChange={onChangeName} value={name}/>
            <AuthButton onClick={onClickCreate} label="create document"/>
        </div>
    )
}