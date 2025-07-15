import styled from 'styled-components';
import { memo } from 'react';
import { MemoItem as MemoItemType } from 'store/memo/type';
import { useMemoSlice } from 'store/memo';
import { useDispatch } from 'react-redux';

const Box = styled.div<{ selected?: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 8px 15px;
  border-radius: 5px;
  border-bottom: ${props => (props.selected ? 'none' : '1px solid #e9e9e9')};
  margin: 5px 0;
  user-select: none;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#ffe48b' : '#fff')};
`;

const MemoTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #2c2c2c;

  display: -webkit-box;
  -webkit-line-clamp: 1; /* 보여줄 줄 수 */
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const MemoContent = styled.div`
  font-size: 0.8rem;
  color: #8b8b8b;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const MemoItem = memo(function MemoItem({
  id,
  preview,
  created_at,
  selected,
}: MemoItemType) {
  const { MemoActions } = useMemoSlice();
  const dispatch = useDispatch();

  return (
    <Box
      selected={selected}
      onClick={() => dispatch(MemoActions.selectMemo({ id: id }))}
    >
      <MemoTitle>{preview}</MemoTitle>
      <MemoContent>{new Date(created_at).toLocaleString('de-DE')}</MemoContent>
      <MemoContent>{preview}</MemoContent>
    </Box>
  );
});
