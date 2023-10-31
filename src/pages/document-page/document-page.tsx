import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useComponentUpdate } from "../../hooks";
import { useGetDocumentWithParapgraphsMutation } from "../../redux/api";
import { setDocumentCopiedStatus } from "../../redux/document-slice";
import { IDocument } from "../../interfaces";

import styles from "./document-page.module.scss";
import { ParagraphList } from "../../components/paragraph-list";
import { TagList } from "../../components/tag-list";
import { ActionForm } from "../../components/forms/action-form";

export default function DocumentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { focusParagraph, documentCopied } = useSelector(
    (state) => state.document,
  );

  const [currentDocument, setCurrentDocument] = useState<IDocument | null>(
    null,
  );

  const [getDocument, { data: document, isLoading }] =
    useGetDocumentWithParapgraphsMutation({ fixedCacheKey: "get-document" });

  useComponentUpdate(() => {
    if (isNaN(Number(id))) {
      navigate("/");
    } else {
      // getDocument({ id });
    }
  }, [id, navigate, getDocument]);

  useComponentUpdate(() => {
    if (document && !isLoading) setCurrentDocument(document);
  }, [document]);

  const updateCallback = useCallback(() => {
    getDocument({ id });
  }, [id, getDocument]);

  const onCLickActionForm = useCallback(() => {
    dispatch(setDocumentCopiedStatus(false));
  }, [dispatch]);

  if (isLoading && !currentDocument) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.documentPage}>
      {currentDocument?.paragraphs && (
        <ParagraphList
          paragraphs={currentDocument.paragraphs}
          updateCallback={updateCallback}
        />
      )}
      {focusParagraph && (
        <TagList
          paragraph={focusParagraph.paragraph}
          position={focusParagraph.position}
        />
      )}
      {documentCopied && (
        <ActionForm label="Document copied" onClick={onCLickActionForm} />
      )}
    </div>
  );
}
