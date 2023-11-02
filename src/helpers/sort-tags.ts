import { ISummaryCell, ISummaryRow } from "../interfaces";

export const sortTags = (row: ISummaryRow) =>
  row.tags
    .slice(0)
    .sort((a: ISummaryCell, b: ISummaryCell) => a.tag.id - b.tag.id);
