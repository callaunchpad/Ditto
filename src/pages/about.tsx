import { Stack, Heading } from "@chakra-ui/layout";
import { Image } from '@chakra-ui/react'

import Head from "next/head";
import { useState } from "react";

export default function About() {
  const [child, setChild] = useState<object | null>(null);
  return (
    <>
      <Head>
        <title>Ditto</title>
      </Head>
      <Stack p={4}>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        
      </Stack>
    </>
  );
}
