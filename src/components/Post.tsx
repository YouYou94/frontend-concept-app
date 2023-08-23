import styled from "styled-components";

export const Post = () => {
  return (
    <Layout>
      <Box>
        <PostNumber></PostNumber>
      </Box>
      <Box>
        <PostTitle></PostTitle>
      </Box>
      <Box>
        <PostContent></PostContent>
      </Box>
      <Box>
        <PostSettingButton></PostSettingButton>
      </Box>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div``;

const PostNumber = styled.span``;

const PostTitle = styled.h3``;

const PostContent = styled.span``;

const PostSettingButton = styled.button``;
