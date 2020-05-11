import { TwitterTweetEmbed } from "react-twitter-embed";
import { Flex, useColorMode } from "@chakra-ui/core";

// TODO: the switching between dark mode and light mode doesn't work
//       when the user does the switch while reading the post. However,
//       the switch will be effective once the user navigates back to
//       the post again. Possible solution would be to unmount/remount
//       the component once the theme change is detected.
export default function Tweet({ id }) {
  const { colorMode } = useColorMode();
  return (
    <Flex justify="center" mw="95vw">
      <TwitterTweetEmbed tweetId={id} options={{ theme: colorMode }} />
    </Flex>
  );
}
