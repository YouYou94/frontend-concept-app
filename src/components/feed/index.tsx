import { Box, Layout } from "./Styled";

interface Props {
  feedNumber: number;
  feedTitle: string;
  feedContent: string;
}

export const Feed = ({ feedNumber, feedTitle, feedContent }: Props) => {
  return (
    <Layout>
      <Box width={2} height={2}>
        {feedNumber}
      </Box>
      <Box width={10} height={2}>
        {feedTitle}
      </Box>
      <Box flex={1}>{feedContent}</Box>
    </Layout>
  );
};
