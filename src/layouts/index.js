import { Box, Heading, Text, Flex } from "@chakra-ui/core";

import { formatPath, formatDate } from "../utils/formatters";
import ReadingTime from "../components/post/reading-time";
import Container from "../components/common/container";
import SocialSharing from "../components/post/social-sharing";
import PostSEO from "../components/post/seo";
import { url as baseUrl } from "../config/seo";

export default (frontMatter) => {
  let {
    title,
    publishedAt,
    __resourcePath: path,
    summary,
    readingTime: { minutes: estimatedReadingMinutes },
  } = frontMatter;

  let formattedPublishedAt = formatDate(publishedAt);
  let url = `${baseUrl}${formatPath(path)}`;
  let minutes = parseInt(estimatedReadingMinutes);
  let sharingTitle = `${frontMatter.title}`;

  return ({ children }) => {
    return (
      <Container>
        <PostSEO
          title={title}
          url={url}
          summary={summary}
          publishedAt={publishedAt}
        />
        <Flex
          direction="column"
          dir="auto"
          maxW={["85%", "80%", "70%"]}
          m="auto"
        >
          <Heading
            my="30px"
            as="h1"
            size="xl"
            textAlign="center"
            lineHeight="1.8"
          >
            {title}
          </Heading>
          <Flex
            direction={["column", "column", "row", "row"]}
            alignItems={["center", "center", "baseline", "baseline"]}
            justifyContent="center"
            mb="4"
          >
            <Text>{formattedPublishedAt}</Text>
            <Text mx="5px" display={["none", "none", "block", "block"]}>
              {" "}
              •{" "}
            </Text>
            <ReadingTime minutes={minutes} />
          </Flex>
          <SocialSharing title={sharingTitle} url={url} />
          <Box textAlign="justify">{children}</Box>
        </Flex>
      </Container>
    );
  };
};
