import { useMemo } from "react";
import { AuthButton } from "./auth-button";
import { PulseButton } from "./pulse-button";

export interface IButtonProps {
  label: string;
  type?: string;
  onClick: () => void;
}

export function CustomButton({ type, ...props }: IButtonProps) {
  const currentButton = useMemo(() => {
    switch (type) {
      case "auth":
        return <AuthButton {...props} />;
      case "pulse":
        return <PulseButton {...props} />;
      default:
        return <PulseButton {...props} />;
    }
  }, [type]);

  return currentButton;
}
