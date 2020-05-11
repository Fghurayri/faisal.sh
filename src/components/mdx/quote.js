import { Box, useColorMode } from "@chakra-ui/core";
import { color } from "../../config/theme";

export default function BlockQuote(props) {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.600" };

  return (
    <Box
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      as="blockquote"
      rounded="10px"
      borderRightWidth="20px"
      borderColor="gray.300"
      borderRightColor="gray.400"
      p="3"
      mx="6"
      {...props}
    >
      {props.children}
    </Box>
  );
}
