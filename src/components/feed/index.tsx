import { Box, Layout } from "./Styled";

interface Props {
  feedNumber: number;
  feedTitle: string;
  feedContent: string;
}

export const Feed = ({ feedNumber, feedTitle, feedContent }: Props) => {
  return (
    <Layout>
      <Box width={2} height={2}></Box>
      <Box width={10} height={2}></Box>
      <Box flex={1}></Box>
    </Layout>
  );
};
