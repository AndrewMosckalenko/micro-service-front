import { useMemo } from "react";
import { DefaultButton } from "./default-button";
import { PulseButton } from "./pulse-button";

export interface IButtonProps {
  label: string;
  type?: string;
  onClick: () => void;
}

export function Button({ type, ...props }: IButtonProps) {
  const currentButton = useMemo(() => {
    switch (type) {
      case "auth":
        return <DefaultButton {...props} />;
      case "pulse":
        return <PulseButton {...props} />;
      default:
        return <DefaultButton {...props} />;
    }
  }, [type]);

  return currentButton;
}
