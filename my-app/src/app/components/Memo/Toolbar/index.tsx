import React from 'react';
import styled from 'styled-components';
import { TitleText } from 'app/components/Text';
import SmallButton from 'app/components/button/SmallButton';
import Block from 'app/components/Block';
import SearchInput from 'app/components/Input/SearchInput';

import { ReactComponent as PostDeleteIcon } from './assets/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 (1).svg';
import { ReactComponent as MakeTodo } from './assets/check_circle_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeBoldIcon } from './assets/format_bold_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeImageIcon } from './assets/photo_library_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as PostAddIcon } from './assets/post_add_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';
import { ReactComponent as MakeSizeIcon } from './assets/text_fields_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg';

const Box = styled.div`
  width: 100%;
  height: 60px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0 !important;
  border-bottom: 1px solid #e9e9e9 !important;
  padding: 0 !important;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }
`;

const LeftMenu = styled(Menu)`
  width: 300px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  padding: 0 10px;

  @media (max-width: 700px) {
    margin-left: -200px;
  }
`;

const RightMenu = styled(Menu)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 0 10px;
`;

export default function MemoToolbar() {
  return (
    <Box>
      <LeftMenu>
        <TitleText style={{ marginLeft: '5px' }}>MEMO</TitleText>
        <SmallButton onClick={() => {}} Icon={() => <PostDeleteIcon />} />
      </LeftMenu>
      <RightMenu>
        <SmallButton onClick={() => {}} Icon={() => <PostAddIcon />} />
        <div>
          <SmallButton onClick={() => {}} Icon={() => <MakeSizeIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeBoldIcon />} />
          <Block marginRight="5px" />
          <SmallButton onClick={() => {}} Icon={() => <MakeTodo />} />
        </div>
        <div>
          <SmallButton onClick={() => {}} Icon={() => <MakeImageIcon />} />
          <Block marginRight="5px" />
          <SearchInput />
        </div>
      </RightMenu>
    </Box>
  );
}
