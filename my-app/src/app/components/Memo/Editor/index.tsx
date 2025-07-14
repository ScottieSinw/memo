import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import Block from 'app/components/Block';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 0 0 10px;
  overflow: auto;

  & * {
    font-family: 'Noto Sans' !important;
    letter-spacing: 0.2px;
  }

  .ql-container.ql-snow {
    border: 0px !important;
  }
`;

const MemoDate = styled.div`
  font-size: 0.85em;
  letter-spacing: -0.3px;
  color: #8b8b8b;
  text-align: center;
`;

export default function MemoEditor() {
  const [value, setValue] = useState<string>('');

  return (
    <Box>
      <Block marginTop="5px" />
      <MemoDate>{new Date().toLocaleDateString()}</MemoDate>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ border: 'none' }}
        modules={{
          toolbar: {
            container: '#toolbar',
          },
        }}
        formats={['bold', 'size', 'header', 'image', 'list', 'link']}
      />
    </Box>
  );
}
