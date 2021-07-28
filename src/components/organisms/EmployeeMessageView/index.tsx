import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import MessageList from '../../molecules/MessageList';

const container = css`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Index: FC = () => (
  <div css={container}>
    <MessageList />
  </div>
);

export default Index;
