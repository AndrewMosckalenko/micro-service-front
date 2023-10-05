import { useCallback, useRef } from "react";

import styles from "./pulse-button.module.css";

export function PulseButton({ label, onClick }: IPulseButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const mousePositionToCustomProp = (
    event: React.MouseEvent<HTMLButtonElement>,
    element: HTMLButtonElement,
  ) => {
    let posX = event.nativeEvent.offsetX;
    let posY = event.nativeEvent.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");
  };

  const onCLickButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonRef.current) {
        buttonRef.current.classList.remove(styles.pulse);
        mousePositionToCustomProp(e, buttonRef.current);
        buttonRef.current.classList.add(styles.pulse);
        buttonRef.current.addEventListener(
          "animationend",
          () => {
            buttonRef.current?.classList.remove(styles.pulse);
          },
          { once: true },
        );
        onClick();
      }
    },
    [onClick, buttonRef, mousePositionToCustomProp],
  );

  return (
    <button
      className={styles.pulse_btn}
      onClick={onCLickButton}
      ref={buttonRef}
    >
      {label}
    </button>
  );
}

export interface IPulseButtonProps {
  label: string;
  onClick: () => void;
}
