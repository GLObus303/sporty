import { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';

import { getSport } from '../api/sports';
import { EventDetailType } from '../model/Event';
import { Error } from './Error';

const DetailBox = styled.div`
  display: flex;
  min-width: 50%;
  min-height: 10%;
  background-color: white;
  overflow: hidden;
`;

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 700;
`;

const DetailContent = styled.div`
  padding: 0rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
  background-color: ${({ theme }) => theme.color.cream};
  background-repeat: no-repeat;
  padding: 3rem;
`;

const ListHeaders = styled.header`
  padding-top: 0.5rem;
`;

const Divider = styled.hr`
  margin: 1rem;
`;

const Description = styled.span`
  display: inline-block;
  width: 25rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
`;

type DetailListProps = {
  eventId: string | undefined;
};

export const DetailList: React.FC<DetailListProps> = ({ eventId }) => {
  const [detail, setDetail] = useState<EventDetailType>();

  useEffect(() => {
    const getSportDetail = async () => {
      if (eventId) {
        const sportDetail = await getSport(eventId);

        setDetail(sportDetail);
      }
    };

    getSportDetail();
  }, [eventId]);

  if (!detail) {
    // TODO: We should display message base on http status of the result - if 404 "not found", if anything else "sorry, something went wrong"
    return <Error message="Omlouvame se, neco se pokazilo" />;
  }

  return (
    <>
      <DetailBox>
        <List>
          <ListHeaders>Location</ListHeaders>
          <strong>{detail.location}</strong>

          <ListHeaders>Date</ListHeaders>
          <strong>{detail.date}</strong>

          <ListHeaders>Time</ListHeaders>
          <strong>{detail.time}</strong>

          <ListHeaders>Activity</ListHeaders>
          <strong>{detail.activity}</strong>

          <ListHeaders>Capacity</ListHeaders>
          <strong>{detail.capacity}</strong>

          <ListHeaders>Price</ListHeaders>
          <strong>{detail.price}</strong>
        </List>

        <Content>
          <Header>{detail.eventName}</Header>
          <DetailContent>
            <Divider />
            <Description>{detail.text}</Description>
          </DetailContent>
        </Content>
      </DetailBox>
    </>
  );
};
