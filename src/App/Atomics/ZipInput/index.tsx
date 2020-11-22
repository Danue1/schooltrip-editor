import { FileReader } from "lib/file-reader";
import { useRefresh } from "lib/use-refresh";
import { Zip } from "lib/zip";
import React, { ChangeEvent } from "react";
import styled, { CSSProperties } from "styled-components";
import { noop } from "utils/noop";

const Layout = styled.input`
  display: none;
`;

type Props<E> = {
  className?: string;
  style?: CSSProperties;
  name?: string;
  onChange: (zip: null | Zip) => void;
  onError?: (error: E) => void;
};

export const ZipInput = function <E extends Error>({ name, onChange, onError = noop, ...props }: Props<E>): JSX.Element {
  const [token, refresh] = useRefresh();
  const change = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const fileReader = FileReader.of(event.currentTarget.files!);
    const zipFile = await fileReader.readAsArrayBuffer(0);
    if (!zipFile) {
      return;
    }
    const zip = await Zip.unzipFromArrayBuffer(zipFile);
    onChange(zip);

    refresh();
  };

  return <Layout key={token} id={name} name={name} type="file" onChange={change} {...props} />;
};
