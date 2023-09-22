import { ITag } from "./tag";

export interface IParagraph {
  id: number;
  name: string;
  content: string;
  type: number;
  tags: ITag[];
}
