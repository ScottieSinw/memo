import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import Block from 'app/components/Block';
import { useMemoSlice } from 'store/memo';
import { useDispatch, useSelector } from 'react-redux';
import { SelectedMemoListSelector } from 'store/memo/selectors';

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

  & .ql-container > .ql-editor {
    min-height: 50vh;
  }
`;

const MemoDate = styled.div`
  font-size: 0.85em;
  letter-spacing: -0.3px;
  color: #8b8b8b;
  text-align: center;
`;

export default function MemoEditor() {
  const { MemoActions } = useMemoSlice();
  const dispatch = useDispatch();
  const selectedMemo = useSelector(SelectedMemoListSelector);

  const [value, setValue] = useState<string>('');

  const Editorref = React.useRef<ReactQuill>();

  React.useEffect(() => {
    setValue(selectedMemo !== undefined ? selectedMemo.content : '');
  }, [selectedMemo]);

  return (
    <Box>
      <Block marginTop="5px" />
      <MemoDate>
        {selectedMemo !== undefined
          ? new Date(selectedMemo?.created_at ?? '').toLocaleDateString()
          : 'Create a new Memo'}
      </MemoDate>
      <ReactQuill
        theme="snow"
        value={value}
        ref={element => {
          if (element !== null) {
            Editorref.current = element;
          }
        }}
        onChange={content => {
          setValue(content);
          dispatch(
            MemoActions.saveMemo({
              content: content,
              preview:
                Editorref.current !== undefined
                  ? Editorref.current.getEditor().getText()
                  : '',
            }),
          );
        }}
        style={{ border: 'none' }}
        modules={{
          toolbar: {
            container: '#toolbar',
          },
        }}
        readOnly={selectedMemo == undefined}
        formats={['bold', 'size', 'header', 'image', 'list', 'link']}
      />
    </Box>
  );
}
