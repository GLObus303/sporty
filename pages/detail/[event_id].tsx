import { NextPage } from 'next';
import {useRouter} from 'next/router'
import styled from 'styled-components';

import { Layout } from '../../components/Layout';
import { DetailList } from '../../components/DetailList';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
`;

const Detail: NextPage = () => {
  const router = useRouter()
  console.log(router.query)
  const { event_id } = router.query
    
  return(
  <Layout>
    <Container>
      <DetailList event_id={event_id} />
    </Container>
  </Layout>
)
};

export default Detail;
