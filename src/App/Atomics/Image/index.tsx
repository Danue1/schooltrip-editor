import React from "react";

type Props = Styleable & {
  id?: string;
  source: string;
  description?: string;
};

export const Image = ({ source, description = "", ...props }: Props) => <img src={source} alt={description} {...props} />;
