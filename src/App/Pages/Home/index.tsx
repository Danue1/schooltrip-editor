import { InternalLink } from "App/Atomics/InternalLink";
import { PATH_CHARACTER, PATH_ITEM, PATH_QUEST } from "constants/Routes";
import React from "react";

export const HomePage = () => (
  <div>
    <h1>School Trip! 에디터</h1>
    <h2>
      <InternalLink to={PATH_CHARACTER}>캐릭터 편집</InternalLink>
    </h2>
    <h2>
      <InternalLink to={PATH_ITEM}>아이템 편집</InternalLink>
    </h2>
    <h2>
      <InternalLink to={PATH_QUEST}>퀘스트 편집</InternalLink>
    </h2>
  </div>
);
