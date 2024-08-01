import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      type="button"
      className={cn(
        "flex justify-center items-center px-[26px] py-[10px] outline-none hover:brightness-90 transition-all font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
