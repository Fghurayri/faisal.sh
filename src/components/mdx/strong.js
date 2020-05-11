import { Text } from "@chakra-ui/core";

export default function Strong(props) {
  return (
    <Text {...props} as="strong" fontWeight="900">
      {props.children}
    </Text>
  );
}
