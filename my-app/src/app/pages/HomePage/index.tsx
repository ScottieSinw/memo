import MemoEditor from 'app/components/Memo/Editor';
import MemoList from 'app/components/Memo/List';
import MemoToolbar from 'app/components/Memo/Toolbar';
import * as React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function HomePage() {
  return (
    <>
      <div>
        <MemoToolbar />
        <FlexRow>
          <MemoList />
          <MemoEditor />
        </FlexRow>
      </div>
    </>
  );
}
