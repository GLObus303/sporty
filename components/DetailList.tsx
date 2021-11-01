import styled from 'styled-components';

const DetailBox = styled.div`
  display: flex;
  min-width: 50%;
  min-height: 100%;
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

export const DetailList = () => (
  <DetailBox>
    <Image>
      <List>
        <ListHeaders>Location</ListHeaders>
        <ListDescription>U průhonu 7a, Praha</ListDescription>

        <ListHeaders>Date</ListHeaders>
        <ListDescription>28.2.2022</ListDescription>

        <ListHeaders>Time</ListHeaders>
        <ListDescription>15:00</ListDescription>

        <ListHeaders>Activity</ListHeaders>
        <ListDescription>Odpolední výběh na Vítkov</ListDescription>

        <ListHeaders>Capacity</ListHeaders>
        <ListDescription>100</ListDescription>

        <ListHeaders>Price</ListHeaders>
        <ListDescription>Zdarma</ListDescription>
      </List>
    </Image>
    <Content>
      <Header>Name of the event</Header>
      <DetailContent>
        <Divider className="rounded" />
        <Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Description>
      </DetailContent>
    </Content>
  </DetailBox>
);
