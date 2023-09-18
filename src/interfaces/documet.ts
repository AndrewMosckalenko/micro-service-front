import { IParagraph } from "./paragraph";

export interface IDocument {
  id: number;
  name: string;
  paragraphs: IParagraph[] | null;
}
