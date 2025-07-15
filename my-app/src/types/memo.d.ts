interface MemoItemContent {
  content: string;
  preview: string;
}

interface MemoItemContent extends MemoItemContent {
  id: string;
  created_at: string;
  selected: boolean;
}
