import { IDocument, ITag } from ".";

export interface IProject {
  id: number;
  name: string;
  documents: IDocument[];
  tags: ITag[];
}
