import { DefaultButton } from "./default-button";
import { PulseButton } from "./pulse-button";

export function Button({ typeButton, type: _, ...props }: IButtonProps) {
  switch (typeButton) {
    case "pulse":
      return <PulseButton {...props} />;
    default:
      return <DefaultButton {...props} />;
  }
}

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: string;
}
