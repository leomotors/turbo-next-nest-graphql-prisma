import { FC, PropsWithChildren, memo } from "react";

import clsx from "clsx";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = memo(({ children, onClick }) => {
  return (
    <button
      className={clsx(
        "rounded-lg p-4 text-xl font-bold transition-colors bg-blue-600 text-white hover:bg-blue-500"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
