import { IButton } from "./button.interface";
import cn from "classnames";
import React from "react";

export const Button: React.FC<IButton> = ({
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div>
      <button
        className={cn(
          className,
          "mb-[15px] flex h-10 w-full items-center justify-center gap-[6px] rounded-[15px] text-sm font-[600] transition duration-100 hover:opacity-80"
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
