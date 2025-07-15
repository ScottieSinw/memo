import { MemoItem } from './memo/type';

export const saveMemoData = (memoData: MemoItem[]): void => {
  localStorage.setItem('memoData', JSON.stringify(memoData));
};

export const loadMemoData = (): MemoItem[] => {
  const memoData = localStorage.getItem('memoData');
  if (memoData) {
    return JSON.parse(memoData);
  } else {
    return [];
  }
};
