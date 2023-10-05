import { useParams } from "react-router-dom";

import { useGetSummaryTableMutation } from "../../redux/api";

import { useComponentUpdate } from "../../hooks";
import { ITag } from "../../interfaces";

import styles from "./summary-table.module.css";
import classNames from "classnames";

export function SummaryTable() {
  const { projectId } = useParams();
  const [getProjectSummaryTable, { data, error, isLoading }] =
    useGetSummaryTableMutation({});

  useComponentUpdate(() => {
    if (projectId) getProjectSummaryTable({ id: projectId });
  }, [projectId, getProjectSummaryTable]);

  useComponentUpdate(() => {
    console.log(data)
  }, [data])

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
      {data.table.map((row) => (
        <div className={styles.summary_table__row}>
          <div
            className={classNames(
              styles.summary_table__cell,
              styles.summary_table__left_cell,
            )}
          >
            {row.document.name}
          </div>
          {row.tags.map((tag) => (
            <div className={styles.summary_table__cell}>{tag.count || " "}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
