import styled from 'styled-components';
import React from 'react';

const List = styled.div`
  width: 300px;
  height: calc(100vh - 60px);
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;
`;

export default function MemoList() {
  return <List></List>;
}
