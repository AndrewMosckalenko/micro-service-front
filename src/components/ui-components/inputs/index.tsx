import { useMemo } from "react";
import { AuthInput } from "./auth-input";
import { FileInput } from "./file-input";
import { MultipleInput } from "./multiple-input";

export interface IInputProps {
  value?: string;
  hint?: string;
  type?: string;
  onChange?: (value: string) => void;
  onChangeFile?: (file: File) => void;
}

export function CustomInput({ type, ...props }: IInputProps) {
  const currentInput = useMemo(() => {
    switch (type) {
      case "auth":
        return <AuthInput {...props} />;
      case "file":
        return <FileInput {...props} />;
      case "multiple":
        return <MultipleInput {...props} />;
      default:
        return <AuthInput {...props} />;
    }
  }, [type]);

  return currentInput;
}
