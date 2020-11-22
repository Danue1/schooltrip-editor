export type Quest = MainQuest | CommonQuest | DailyQuest;

export type MainQuest = {
  type: "Main";
  id: number;
  name: string;
  npc_id?: number;
  auto_success?: boolean;
  summary: string;
  start_script: number;
  success_script: number;
  unsuccess_script: number;
  reward?: QuestReward;
};

export type CommonQuest = {
  type: "Common";
  id: number;
  name: string;
  npc_id?: number;
  summary: string;
  start_script: number;
  success_script: number;
  unsuccess_script: number;
  reward?: QuestReward;
};

export type DailyQuest = {
  type: "Daily";
  id: number;
  name: string;
  npc_id?: number;
  summary: string;
  start_script: number;
  success_script: number;
  unsuccess_script: number;
  reward?: QuestReward;
};

export type QuestReward = {
  currency?: number;
  experience?: number;
  items?: Record<string, number>;
};
