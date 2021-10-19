import styled from 'styled-components';

const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.cream};
  font-size: 1.5rem;
  font-weight: 700;
`;

const Content = styled.main`
  flex: 1 0 auto;
  padding: 0rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.cream};
  color: ${({ theme }) => theme.color.darkSienna};
`;

export const Layout: React.FC = ({ children }) => (
  <Container>
    <Header>Sporty</Header>
    <Content>{children}</Content>
    <Footer>© 2021 Ryonyx</Footer>
  </Container>
);
