import { styled } from "styled-components";

export const HomeMenu = () => {
  const handleClickMenu = (menu: string) => {};

  return (
    <Box>
      <List>
        <Item onClick={() => handleClickMenu("html")}>HTML</Item>
        <Item onClick={() => handleClickMenu("css")}>CSS</Item>
        <Item onClick={() => handleClickMenu("js")}>Javascript</Item>
        <Item onClick={() => handleClickMenu("react")}>React</Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </List>
    </Box>
  );
};

const Box = styled.div`
  display: flex;

  padding-top: 1rem;
`;

const List = styled.ul`
  flex: 1;

  display: grid;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  align-items: center;
  justify-content: space-around;
  grid-gap: 1rem;

  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  width: 12rem;
  height: 12rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.5rem;
  border: 1px solid rgb(204, 204, 204);

  list-style: none;

  font-size: 1.1rem;
  font-weight: bold;

  transition: all 0.3s ease-out;

  cursor: pointer;

  &:hover {
    transform: translateY(-0.25rem);
  }
`;
