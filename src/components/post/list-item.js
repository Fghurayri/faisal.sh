import { Flex, Divider, Text, Heading } from "@chakra-ui/core";
import RouterLink from "next/link";
import { formatDate, formatPath } from "../../utils/formatters";
import ReadingTime from "./reading-time";

export default function PostItem({
  publishedAt,
  title,
  summary,
  readingTime,
  __resourcePath,
}) {
  let formattedPublishedAt = formatDate(publishedAt);
  let minutes = parseInt(readingTime.minutes);
  return (
    <Flex
      as="article"
      direction="column"
      dir="rtl"
      mt="30px"
      p="3"
      alignSelf="flext-start"
    >
      <Flex
        alignItems="baseline"
        direction={["column", "column", "row", "row"]}
      >
        <Text ml="4" fontSize={["md", "lg", "xl", "xl"]}>
          {formattedPublishedAt}
        </Text>
        <ReadingTime minutes={minutes} />
      </Flex>
      <RouterLink href={formatPath(__resourcePath)} passHref>
        <Heading my="20px" as="a" lineHeight="1.8">
          {title}
        </Heading>
      </RouterLink>
      <Text fontSize={["md", "lg", "xl", "xl"]}>{summary}</Text>
      <Divider mt="30px" />
    </Flex>
  );
}
