import styled from "styled-components";

type PostProps = {
  postNumber: number;
  postTitle: string;
  postContent: string;
};

export const Post = ({ postNumber, postTitle, postContent }: PostProps) => {
  return (
    <Layout>
      <Box>
        <PostNumber>{postNumber}</PostNumber>
      </Box>
      <Box>
        <PostTitle>{postTitle}</PostTitle>
      </Box>
      <Box>
        <PostContent>{postContent}</PostContent>
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
