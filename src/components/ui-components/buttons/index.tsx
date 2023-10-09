import { useMemo } from "react";
import { DefaultButton } from "./default-button";
import { PulseButton } from "./pulse-button";

export function Button({ typeButton, type: _, ...props }: IButtonProps) {
  const currentButton = useMemo(() => {
    switch (typeButton) {
      case "pulse":
        return <PulseButton {...props} />;
      default:
        return <DefaultButton {...props} />;
    }
  }, [typeButton, props]);

  return currentButton;
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: string;
}
