export const itemTypes = ["top", "new", "ask", "show", "job", "best"] as const;

export type ItemType = (typeof itemTypes)[number];

export type Item = {
  id: number;
  title?: string;
  by?: string;
  time?: number;
  score?: number;
  descendants?: number;
  url?: string;
  text?: string;
  type?: ItemType;
  kids?: number[];
  points?: number;
  parent?: string;
};
