import { IParagraph } from "../../interfaces";

import styles from './paragraph-list.module.css';


export const ParagraphItem = ({ paragraph }: IParagraphItemProps) => {

    return (
        <div className={styles.paragraph_item}>
            <h3 className={styles.paragraph_item__title}>{paragraph.name}</h3>
            <p className={styles.paragraph_item__content}>{paragraph.content}</p>
        </div>
    )
}

export interface IParagraphItemProps {
    paragraph: IParagraph;
}