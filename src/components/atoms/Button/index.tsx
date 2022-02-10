import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      className="h-10 bg-purple-500 font-bold text-white hover:bg-purple-400 disabled:cursor-not-allowed disabled:bg-gray-200"
    >
      {children}
    </button>
  );
};
