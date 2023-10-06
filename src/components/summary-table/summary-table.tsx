import { useParams } from "react-router-dom";
import classNames from "classnames";

import { useGetSummaryTableMutation } from "../../redux/api";

import { useComponentUpdate } from "../../hooks";
import { ISummaryCell, ITag, ISummaryRow } from "../../interfaces";

import styles from "./summary-table.module.css";

export function SummaryTable() {
  const { projectId } = useParams();
  const [getProjectSummaryTable, { data, error, isLoading }] =
    useGetSummaryTableMutation({});

  useComponentUpdate(() => {
    if (projectId) getProjectSummaryTable({ id: projectId });
  }, [projectId, getProjectSummaryTable]);


  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error || !data) {
    return <h1>Didn't load</h1>;
  }

  return (
    <div className={styles.summary_table}>
      <div
        className={classNames(
          styles.summary_table__row,
          styles.summary_table__row_header,
        )}
      >
        <div
          className={classNames(
            styles.summary_table__cell,
            styles.summary_table__header_cell,
            styles.summary_table__left_cell,
          )}
        />
        {data.header.map((tag: ITag) => (
          <div
            className={classNames(
              styles.summary_table__cell,
              styles.summary_table__header_cell,
            )}
          >
            {tag.title}
          </div>
        ))}
      </div>
      {data.table.map((row: ISummaryRow) => (
        <div className={styles.summary_table__row}>
          <div
            className={classNames(
              styles.summary_table__cell,
              styles.summary_table__left_cell,
            )}
          >
            {row.document.name}
          </div>
          {row.tags.map((tag: ISummaryCell) => (
            <div className={styles.summary_table__cell}>{tag.count || " "}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
