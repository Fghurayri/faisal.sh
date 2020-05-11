import { Text } from "@chakra-ui/core";

export default function Paragraph(props) {
  return (
    <Text
      fontSize={["md", "lg", "xl", "xl"]}
      lineHeight="2"
      m="4"
      my="8"
      {...props}
    />
  );
}
