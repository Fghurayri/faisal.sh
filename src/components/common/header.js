import { Stack, useColorMode, Box, Text, Flex, Button } from "@chakra-ui/core";
import { FiSun } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import RouterLink from "next/link";
import { bgColor, color } from "../../config/theme";

let navItems = [
  {
    name: "الرئيسية",
    href: "/",
  },
];

function NavItem({ name, href }) {
  return (
    <Text fontSize="xl" mr="6">
      <RouterLink href={href} passHref>
        <a>{name}</a>
      </RouterLink>
    </Text>
  );
}

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="header"
      w={["90%", "80%", "70%", "70%"]}
      m="6"
      mt="8"
      justifyContent="space-between"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Stack as="nav" isInline alignItems="center">
        {navItems.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}
      </Stack>
      <Button
        onClick={toggleColorMode}
        _hover={{ boxShadow: "lg" }}
        aria-label="theme switching"
      >
        <Box size="5" mt="1" as={colorMode === "light" ? IoMdMoon : FiSun} />
      </Button>
    </Flex>
  );
}
