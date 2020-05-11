import { ListItem as ChakraListItem } from "@chakra-ui/core";

export default function ListItem(props) {
  return (
    <ChakraListItem
      fontSize={["md", "lg", "xl", "xl"]}
      lineHeight="2"
      mx={["20px", "30px", "40px", "80px"]}
      my="2"
      {...props}
    />
  );
}
