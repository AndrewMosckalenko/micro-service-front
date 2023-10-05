import { useMemo } from "react";
import { DefaultInput } from "./default-input";
import { FileInput } from "./file-input";
import { MultipleInput } from "./multiple-input";

export interface IInputProps {
  value?: string;
  hint?: string;
  type?: string;
  onChange?: (value: string) => void;
  onChangeFile?: (file: File) => void;
}

export function Input({ type, ...props }: IInputProps) {
  const currentInput = useMemo(() => {
    switch (type) {
      case "auth":
        return <DefaultInput {...props} />;
      case "file":
        return <FileInput {...props} />;
      case "multiple":
        return <MultipleInput {...props} />;
      default:
        return <DefaultInput {...props} />;
    }
  }, [type]);

  return currentInput;
}
