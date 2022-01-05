import styled from 'styled-components';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';
import { Login } from '../components/Login';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
`;

const LoginPage: NextPage = () => (
  <Layout>
    <Container>
      <Login />
    </Container>
  </Layout>
);

export default LoginPage;
