import styled from 'styled-components';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';
import { SCREEN } from '../constants';
import { Login } from '../components/Login'

const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
`;

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../mocks/server').server.listen();
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../mocks/browser').worker.start();
}

const LoginPage: NextPage = () => (
  <Layout>
      <Container>
          <Login/>
      </Container>
  </Layout>
);

export default LoginPage;
