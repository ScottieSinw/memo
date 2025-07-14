import styled from 'styled-components';

const Box = styled.div<{ selected?: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 8px 15px;
  border-radius: 5px;
  border-bottom: ${props => (props.selected ? 'none' : '1px solid #e9e9e9')};
  margin: 5px 0;
  user-select: none;
  cursor: pointer;
  background-color: ${props => (props.selected ? '#ffe48b' : 'fff')};
`;

const MemoTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #2c2c2c;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const MemoContent = styled.div`
  font-size: 0.8rem;
  color: #8b8b8b;
  text-overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export function MemoItem({
  id,
  preview,
  created_at,
  selected,
}: {
  id: string;
  preview: string;
  created_at: string;
  selected: boolean;
}) {
  return (
    <Box selected={selected}>
      <MemoTitle>{preview}</MemoTitle>
      <MemoContent>{new Date(created_at).toLocaleString('de-DE')}</MemoContent>
      <MemoContent>{preview}</MemoContent>
    </Box>
  );
}
