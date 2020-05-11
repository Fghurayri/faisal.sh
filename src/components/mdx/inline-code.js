import { useColorMode, Box } from "@chakra-ui/core";

export default function InlineCode(props) {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "gray.400",
    dark: "gray.100",
  };
  const color = {
    light: "gray.50",
    dark: "gray.500",
  };

  return (
    <Box
      as="code"
      {...props}
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      pt="6px"
      pb="8px"
      radius="12px"
    >
      {props.children}
    </Box>
  );
}
