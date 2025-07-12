import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-bottom: 1px solid #e9e9e9;
`;

export default function MemoToolbar() {
  return <Box></Box>;
}
