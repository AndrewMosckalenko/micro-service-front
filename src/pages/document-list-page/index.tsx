import { useDispatch, useSelector } from "react-redux";

import { DocumentList } from "../../components";
import { documentsFromDocumentsReducerSelector } from "../../redux/reducers/selectors";
import { requestDocumentsAction } from "../../redux/actions";
import { useComponentUpdate } from "../../hooks";

import styles from "./document-list-page.module.css";

export default function DocumentListPage() {
  const dispatch = useDispatch();

  const documents = useSelector(documentsFromDocumentsReducerSelector);

  useComponentUpdate(() => {
    dispatch(requestDocumentsAction());
  }, [dispatch]);

  return (
    <div className={styles.document_list_page}>
      {documents && <DocumentList documents={documents} />}
    </div>
  );
}
