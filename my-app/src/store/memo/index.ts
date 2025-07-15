import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { MemoState } from './type';
import type { MemoItem } from './type';
import { useInjectReducer } from 'redux-injectors';
import { loadMemoData, saveMemoData } from 'store/localStorage';

export const initialState: MemoState = {
  search: '',
  memolist: loadMemoData(),
};

const slice = createSlice({
  name: 'memo',
  initialState: initialState,
  reducers: {
    addMemo: {
      reducer: (state, action: PayloadAction<MemoItem>) => {
        state.memolist.push(action.payload);
        for (const memo of state.memolist) {
          if (memo.id === action.payload.id) continue;
          if (memo.selected) memo.selected = false;
        }
        saveMemoData(state.memolist);
      },
      prepare: (content: string, preview: string) => {
        const id = nanoid();
        return {
          payload: {
            id: id,
            content: content,
            preview: preview,
            selected: true,
            created_at: new Date().toDateString(),
          },
        };
      },
    },
    selectMemo(state, action: PayloadAction<{ id: string }>) {
      const id = action.payload.id;
      for (const memo of state.memolist) {
        if (memo.id === id) continue;
        if (memo.selected) memo.selected = false;
      }

      const memo = state.memolist.find(memo => memo.id === id);
      if (memo) memo.selected = true;
      saveMemoData(state.memolist);
    },
    saveMemo(
      state,
      action: PayloadAction<{ content: string; preview: string }>,
    ) {
      const content = action.payload.content;
      const preview = action.payload.preview;
      const memo = state.memolist.find(memo => memo.selected);
      if (memo) {
        memo.content = content;
        memo.preview = preview;
        memo.created_at = new Date().toString();
      }
      saveMemoData(state.memolist);
    },

    deleteMemo(state) {
      // 선택된 메모만 삭제
      state.memolist = state.memolist.filter(memo => !memo.selected);

      // 가장 최근 메모를 선택 처리
      const sortedMemos = [...state.memolist].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
      if (sortedMemos.length > 0) {
        sortedMemos[0].selected = true;
      }

      saveMemoData(state.memolist);
    },
    searchMemo(state, action: PayloadAction<{ search: string }>) {
      state.search = action.payload.search;
    },
  },
});

export const { actions: MemoActions } = slice;

export const useMemoSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { MemoActions: slice.actions };
};
