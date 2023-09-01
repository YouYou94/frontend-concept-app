import styled from "styled-components";

export const Layout = styled.div`
  height: 2rem;

  display: flex;

  margin: 0 3rem;
  border-top: 1px solid rgb(204, 204, 204);
  padding: 0 3rem;
`;

export const Box = styled.div<{
  width?: number;
  height?: number;
  flex?: number;
}>`
  flex: ${(prop) => prop.flex};

  width: ${(prop) => prop.width}rem;
  height: ${(prop) => prop.height}rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
