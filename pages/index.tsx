import styled from 'styled-components';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  background-image: url('weird_runner.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const Content = styled.div`
  width: 30%;
  padding: 1rem;
  background-color: red;
`;

const Home: NextPage = () => (
  <Layout>
    <Container>
      <Content>Content</Content>
    </Container>
  </Layout>
);

export default Home;
