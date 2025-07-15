// src/store/memo/type.ts
export interface MemoItem {
  id: string;
  content: string;
  preview: string;
  selected: boolean;
  created_at: string;
}

export interface MemoState {
  search: string;
  memolist: MemoItem[];
}
