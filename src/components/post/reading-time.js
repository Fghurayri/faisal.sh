import { Flex, Icon, Text } from "@chakra-ui/core";

function CoffeeCups({ minutes }) {
  let numberOfCups = minutes > 4 ? minutes / 4 : 1;
  return (
    <>
      {Array.from(Array(parseInt(numberOfCups))).map((_cup, index) => (
        <Icon key={index} name="cup" size="20px" role="img" />
      ))}
    </>
  );
}

export default function ReadingTime({ minutes }) {
  return (
    <Flex alignItems="baseline">
      <Text ml="2">
        الوقت المتوقع للقراءة <strong dir="ltr">{minutes}</strong> دقيقة
      </Text>
      <CoffeeCups minutes={minutes} />
      <Icon name="dallah" size="40px" role="img" />
    </Flex>
  );
}
