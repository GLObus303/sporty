import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
`;

type ErrorProps = {
  message: string;
};

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <Container>{message}</Container>
);
