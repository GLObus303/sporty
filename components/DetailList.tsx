import { useState, useEffect, Fragment } from 'react';
import {useRouter} from 'next/router'
import styled from 'styled-components';

const DetailBox = styled.div`
  display: flex;
  min-width: 50%;
  min-height: 10%;
  background-color: white;
  overflow: hidden;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20%;
  background-color: ${({ theme }) => theme.color.cream};
  background-repeat: no-repeat;
`;

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: 700;
`;

const DetailContent = styled.div`
  padding: 0rem;
`;

const List = styled.div`
  padding: 3rem;
`;

const ListHeaders = styled.header`
  padding: 0.5rem;
`;

const ListDescription = styled.strong`
  margin: 1rem;
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

if (typeof window === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../mocks/server').server.listen();
} else {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../mocks/browser').worker.start();
}

export const DetailList: React.FC = ({event_id}) => {
  const [detail, setDetail] = useState<any[]>();

  useEffect(() => {
    fetch('/sportdetail')
      .then((response) => response.json())
      .then((data) => setDetail(data[event_id]));
  }, [event_id]);

  return (
    <DetailBox>
      {
        detail ? detail.map((info, index) => (
          <Fragment key={index}>
            <Image>
              <List>
                <ListHeaders>Location</ListHeaders>
                <ListDescription>{info.location}</ListDescription>

                <ListHeaders>Date</ListHeaders>
                <ListDescription>{info.date}</ListDescription>

                <ListHeaders>Time</ListHeaders>
                <ListDescription>{info.time}</ListDescription>

                <ListHeaders>Activity</ListHeaders>
                <ListDescription>{info.activity})</ListDescription>

                <ListHeaders>Capacity</ListHeaders>
                <ListDescription>{info.capacity}</ListDescription>
                
                <ListHeaders>Price</ListHeaders>
                <ListDescription>{info.price}</ListDescription>
              </List>
            </Image>
            <Content>
              <Header>{info.event_name}</Header>
              <DetailContent>
                <Divider className="rounded" />
                <Description>
                  {info.text}
                </Description>
              </DetailContent>
            </Content>
          </Fragment>
        )) : null
      }
    </DetailBox>
  )
};
