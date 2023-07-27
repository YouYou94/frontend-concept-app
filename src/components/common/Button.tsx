import styled from "styled-components";

export const Button = styled.button<{ mode?: string }>`
  border: 1px solid ${(prop) => (prop.mode === "true" ? "white" : "black")};
  border-radius: 0.25rem;

  background-color: transparent;
`;

export const CommonButton = styled(Button)`
  width: 7.5rem;
  height: 2.5rem;

  font-size: 1.1rem;
`;

export const SmallButton = styled(Button)`
  width: 4rem;
  height: 1.75rem;
`;
