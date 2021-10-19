import { NextPage } from 'next';
import styled from 'styled-components';

import { Layout } from '../components/Layout';
import { DetailList } from '../components/DetailList';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
`;

const Detail: NextPage = () => (
  <Layout>
    <Container>
      <DetailList />
    </Container>
  </Layout>
);

export default Detail;
