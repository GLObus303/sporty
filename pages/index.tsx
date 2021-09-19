import styled from 'styled-components';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50%;
  background-image: url('basketball-big.jpg');
  background-repeat: no-repeat;
`;

const Headline = styled.div`
  width: 30%;
  padding: 1rem 2rem;
  font-family: 'Lobster', cursive;
  font-size: 3.75rem;
  line-height: 4rem;
  font-weight: 600;
  margin: 2rem;
`;

const DiscoverBtn = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.cream};
  color: black;
  font-family: 'Anton', cursive;
  font-size: 1.75rem;
  font-weight: 300;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.6s ease 0s;
  &:hover {
    background-color: ${({ theme }) => theme.color.darkSienna};
    box-shadow: 0 1rem 1rem rgba(255, 255, 255, 0.4);
    color: #fff;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: red;
`;

const BlogImg = styled.img`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
`;

const BlogText = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.6);
  width: 100%;
  height: 40%;
  top: 60%;
  box-shadow: 0 -2px 12px rgba(#000, 0.3);
  padding: 10px 12px;
  overflow: hidden;
  transition: all 450ms ease-in-out 0s;
  cursor: pointer;
  h2 {
    color: rgba(0, 0, 0, 0.85);
    width: auto;
  }
  p {
    color: #555;
    width: 380px;
    height: 38px;
    margin: 8px 0;
    line-height: 1.25;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  a {
    color: #378aee;
    text-decoration: none;
    transition: all 350ms linear;
    visibility: hidden;
    &:hover {
      color: #449cc5;
      border-bottom: 1px dotted #47a8f2;
    }
  }
`;

const BlogCard = styled.div`
  position: relative;
  top: 5rem;
  width: 25rem;
  height: 17rem;
  margin: 1rem;
  box-shadow: 0 16px 24px rgba(0, 0, 0, 0.85);
  transition: all 450ms ease-out 0s;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.85);
    ${BlogText} {
      background: rgba(255, 255, 255, 0.8);
      height: 50%;
      top: 50%;
      transition: all 450ms ease-in-out 0s;
    }
    p {
      height: 60px;
      transition: all 350ms ease-in-out 0s;
      a {
        visibility: visible;
      }
    }
  }
`;

const sports = ['fotbal', 'tenis', 'bowling', 'pingpong'];
const Boxes = () => {
  const boxT = sports.map((sport) => (
    <BlogCard>
      <BlogImg src="https://user-images.githubusercontent.com/16360374/37567282-e1932872-2a81-11e8-807b-efc5a997f2f1.jpg" />
      <BlogText className="text-overlay">
        <h2>{sport}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sodales posuere felis non efficitur. Mauris mollis elit urna, id
          tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus sodales posuere felis non efficitur. Mauris mollis elit
          urna, id tempus.
        </p>
      </BlogText>
    </BlogCard>
  ));

  return boxT;
};

const Home: NextPage = () => (
  <Layout>
    <Container>
      <Headline>Do what you love but with people!</Headline>
      <DiscoverBtn>DISCOVER</DiscoverBtn>
    </Container>
    <BoxContainer>
      <Boxes />
    </BoxContainer>
  </Layout>
);

export default Home;
