import styled from 'styled-components';
import React from 'react';
import { MemoItem } from '../Item';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 687px) {
    margin-left: -200px;
    transition: 0.1s;
    $:hover {
      margin-left: 0;
    }
  }
`;

export default function MemoList() {
  return (
    <List>
      <MemoItem
        id={'1'}
        preview="This is MeMo"
        created_at={new Date().toString()}
        selected={true}
      />
    </List>
  );
}
