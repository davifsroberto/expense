import { ButtonHTMLAttributes, ReactNode } from "react";

import tw from "tailwind-styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "ghost";
}

export const Button = ({ children, variant, ...props }: Props) => {
  switch (variant) {
    case "ghost":
      return <GhostButton {...props}>{children}</GhostButton>;
      break;

    default:
      return <MainButton {...props}>{children}</MainButton>;
      break;
  }
};

export const BaseButton = tw.button`
  px-8 h-10  font-bold text-white disabled:cursor-not-allowed disabled:bg-gray-200
`;

export const MainButton = tw(BaseButton)`
  bg-purple-500 hover:bg-purple-400
`;

export const GhostButton = tw(BaseButton)`
  bg-transparent text-purple-500 hover:bg-purple-200
`;
