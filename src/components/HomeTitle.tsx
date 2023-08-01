import { styled } from "styled-components";

export const HomeTitle = () => {
  return (
    <Box>
      <Title>Frontend Concept</Title>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1``;
