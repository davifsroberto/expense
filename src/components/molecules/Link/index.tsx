import NextLink from "next/link";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
}

export const Link = ({ children, href, ...props }: Props) => {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};
