import { useMemo } from "react";
import { DefaultInput } from "./default-input";
import { FileInput } from "./file-input";
import { MultipleInput } from "./multiple-input";

export function Input({
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const currentInput = useMemo(() => {
    switch (type) {
      case "file":
        return <FileInput {...props} />;
      case "multiple":
        return <MultipleInput {...props} />;
      default:
        return <DefaultInput {...props} />;
    }
  }, [type, props]);

  return currentInput;
}
