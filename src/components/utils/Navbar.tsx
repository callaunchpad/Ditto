// combines Chakra Link and Next Link into a single component

import { Box, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import ButtonLink from "./ButtonLink";
import NextLink from "./NextLink";

// this allows styling links with Chakra while also using the Next router
export default function Navbar() {
  return (
    <Flex backgroundColor="ditto.lightPurple" borderBottomRadius="20">
    <HStack p={4}>
        <NextLink href="/">
          <Box p={3} backgroundColor="ditto.purple" borderRadius={10}>
            <Heading color="white">DITTO</Heading>
          </Box>
        </NextLink>
      </HStack>
      <Spacer />
      <HStack p={4}>
        <ButtonLink href="/about" variant="blue">
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
