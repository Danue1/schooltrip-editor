import { ZipInput } from "App/Atomics/ZipInput";
import { Zip } from "lib/zip";
import React from "react";
import type { Quest } from "types/quest";

export const QuestPage = (): JSX.Element => {
  const update = async (zip: null | Zip): Promise<void> => {
    const quest = await zip?.file("index.json")?.json<Quest>();
    const localeConfig = await zip?.file("locales/index.json")?.json();
    const locale = await zip?.file("locales/ko.json")?.json();
    console.log(quest, localeConfig, locale);
  };

  return (
    <div>
      <h1>퀘스트 편집</h1>
      <label htmlFor="file">퀘스트 파일 불러오기</label>
      <ZipInput name="file" onChange={update} />
    </div>
  );
};
