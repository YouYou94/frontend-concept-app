import { Header, Box, Logo, Menu } from "./Styled";

export const TopBar = () => {
  return (
    <Header>
      <Box>
        <Logo>FECA</Logo>
      </Box>
      <Box>
        <Menu></Menu>
      </Box>
    </Header>
  );
};
