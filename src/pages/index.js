import { Flex } from "@chakra-ui/core";
import Container from "../components/common/container";
import PostItem from "../components/post/list-item";
import { frontMatter as blogPosts } from "./blog/*";

let sortedBlogPosts = blogPosts.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
);

export default function Index() {
  return (
    <Container>
      <Flex as="main" direction="column">
        {sortedBlogPosts.map((post) => {
          return <PostItem {...post} key={post.__resourcePath} />;
        })}
      </Flex>
    </Container>
  );
}
