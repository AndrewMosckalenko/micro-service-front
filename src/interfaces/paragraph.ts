import { IParagraphTag } from ".";

export interface IParagraph {
  id: number;
  name: string;
  content: string;
  type: number;
  serial: number;
  paragraphTags: IParagraphTag[];
}
