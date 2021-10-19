import styled from 'styled-components';
import { NextPage } from 'next';

import { Layout } from '../components/Layout';
import { Boxes } from '../components/Boxes';
import { SCREEN } from '../constants';

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 50%;
  background-image: url('heroImage.jpg');
  background-repeat: no-repeat;
  padding: 5rem;
`;

const Headline = styled.div`
  width: 50%;
  padding: 1rem 2rem;
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 600;
  margin: 2rem;

  @media (min-width: ${SCREEN.DESKTOP}) {
    width: 30%;
  }
`;

const DiscoverButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.cream};
  color: black;
  font-size: 1.75rem;
  font-weight: 300;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: color 0.6s ease 0s, background-color 0.6s ease 0s,
    box-shadow 0.6s ease 0s;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkSienna};
    box-shadow: 0 1rem 1rem rgba(255, 255, 255, 0.4);
    color: #fff;
  }
`;

const Home: NextPage = () => (
  <Layout>
    <HeroSection>
      <Headline>Do what you love, but with people!</Headline>
      <DiscoverButton>DISCOVER</DiscoverButton>
    </HeroSection>
    <Boxes />
  </Layout>
);

export default Home;
