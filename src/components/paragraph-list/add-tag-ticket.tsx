import { useCallback, useState } from "react";

import { useCreateTagMutation } from "../../redux/api";
import { IParagraph } from "../../interfaces";

import styles from "./paragraph-list.module.css";

export const AddTagTicket = ({
  paragraph,
  updateCallback,
}: IAddTagTicketProps) => {
  const [newTag, setNewTag] = useState("");
  const [postTag] = useCreateTagMutation();

  const onChangeNewTag = useCallback(
    ({ target }) => {
      setNewTag(target.value);
    },
    [setNewTag],
  );

  const onClickAddTagBtn = useCallback(() => {
    postTag({ id: paragraph.id, title: newTag }).then(updateCallback);
  }, [paragraph, postTag, newTag, updateCallback]);

  return (
    <div className={styles.add_tag_ticket}>
      <input
        placeholder="new tag"
        onChange={onChangeNewTag}
        value={newTag}
        className={styles.add_tag_ticket__inp}
      />
      <button onClick={onClickAddTagBtn} className={styles.add_tag_ticket__btn}>
        +
      </button>
    </div>
  );
};

export interface IAddTagTicketProps {
  paragraph: IParagraph;
  updateCallback: () => void;
}
