import { IDocument, ITag } from ".";

export interface ISummaryTable {
  header: ITag[];
  table: ISummaryRow[];
}

export interface ISummaryRow {
  document: IDocument;
  tags: ISummaryCell[];
}

export interface ISummaryCell { 
  tag: ITag;
  count: number;
}