import { IParagraph } from "./paragraph";

export interface IDocument {
    name: string;
    paragraphs: IParagraph[] | null;
}