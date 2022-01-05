import { NextPage } from 'next';
import styled from 'styled-components';

import { Layout } from '../../components/Layout';
import { DetailList } from '../../components/DetailList';
import { useSingleQueryParam } from '../../hooks/useSingleQueryParam';

const DetailLayout = styled(Layout)`
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Detail: NextPage = () => {
  const eventId = useSingleQueryParam('event_id');

  return (
    <DetailLayout>
      <DetailList eventId={eventId} />
    </DetailLayout>
  );
};

export default Detail;
