import React, { ReactNode } from "react";

export enum LinkTarget {
  Top = "_top",
  Self = "_self",
  Parent = "_parent",
  Blank = "_blank"
}

type Props = {
  to: string;
  target?: LinkTarget;
  children: ReactNode;
};

export const ExternalLink = ({ to, children, ...props }: Props) => (
  <a href={to} {...props}>
    {children}
  </a>
);
