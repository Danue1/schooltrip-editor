type Styleable = {
  className?: string;
  style?: React.CSSProperties;
};

declare module "ms.macro" {
  const ms: {
    (time: string): number;
    (time: number): string;
  };
  export default ms;
}

declare module "@mdx-js/runtime" {
  import { FC } from "react";
  type Props = {
    children: string;
    components?: Record<string, FC>;
    scope?: Record<string, any>;
  };
  const Component: (props: Props) => JSX.Element;
  export default Component;
}
