import { FileReader } from "lib/file-reader";
import { useRefresh } from "lib/use-refresh";
import React, { ChangeEvent } from "react";
import styled, { CSSProperties } from "styled-components";
import { noop } from "utils/noop";

const Layout = styled.input`
  display: none;
`;

type Props<R, E> = {
  className?: string;
  style?: CSSProperties;
  name?: string;
  onChange: (record: R) => void;
  onError?: (error: E) => void;
};

export const JSONInput = function <R extends Record<string, any>, E extends Error>({
  name,
  onChange,
  onError = noop,
  ...props
}: Props<R, E>): JSX.Element {
  const [token, refresh] = useRefresh();
  const change = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const fileReader = FileReader.of(event.currentTarget.files!);
    const text = await fileReader.readAsString(0);
    if (text) {
      onChange(JSON.parse(text));
    }
    refresh();
  };

  return <Layout key={token} id={name} name={name} type="file" onChange={change} {...props} />;
};
