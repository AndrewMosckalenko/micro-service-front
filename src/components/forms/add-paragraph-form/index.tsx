
import { useCallback, useState } from 'react';
import { AuthButton, AuthInput, MultipleInput } from '../..';
import styles from './add-paragraph-form.module.css'
import { useGetDocumentWithParapgraphsMutation, usePostParagraphMutation } from '../../../redux/api';


export const AddParagraphForm = ({ documentId }: IAddParagraphFormProps) => {

    const [postParagraph] = usePostParagraphMutation();
    const [getDocument] = useGetDocumentWithParapgraphsMutation();
    const [{name, content}, setNewParagraph] = useState({
        name: '',
        content: '',
    })

    const onChangeName = useCallback((name: string) => {
        setNewParagraph(prev => ({...prev, name}))
    }, [setNewParagraph])

    const onChangeContent = useCallback((content: string) => {
        setNewParagraph(prev => ({...prev, content}))
    }, [setNewParagraph])

    const onClickAddBtn = useCallback(() => {
        postParagraph({id: documentId, name, content}).then(() => {getDocument({id: documentId})})
    }, [postParagraph, name, content])

    return (
        <div className={styles.add_paragraph_form}>
            <AuthInput hint="name" value={name} onChange={onChangeName}/>
            <MultipleInput value={content} onChange={onChangeContent}/>   
            <AuthButton onClick={onClickAddBtn} label="create paragraph"/>
        </div>
    )
}

export interface IAddParagraphFormProps {
    documentId: number;
}