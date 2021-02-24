import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
`;

const Home: NextPage = () => {
  return <Title>Welcome!</Title>;
};

export default Home;
