// combines Chakra Link and Next Link into a single component

import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import ButtonLink from "./ButtonLink";
import NextLink from "./NextLink";

// this allows styling links with Chakra while also using the Next router
export default function Navbar() {
  return (
    <Flex backgroundColor="ditto.veryLightBlue">
    <HStack p={4}>
        <NextLink href="/">
          <Heading>Ditto</Heading>
        </NextLink>
      </HStack>
      <Spacer />
      <HStack p={4}>
        <ButtonLink href="/test" variant="blue">
          About
        </ButtonLink>
        <ButtonLink href="/test" variant="blue">
          Test Model
        </ButtonLink>
        <ButtonLink href="/test" variant="blue">
          Battle
        </ButtonLink>
      </HStack>
    </Flex>
  );
}
