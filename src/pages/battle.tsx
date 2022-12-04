import { Box, Button, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRandomTwo, updateElo } from "../db/utils/pokemon";

export default function Battle() {
  const [firstUrl, setFirstUrl] = useState("");
  const [secondUrl, setSecondUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const setRandomTwoUrl = async () => {
    const result = await getRandomTwo();
    setFirstUrl(result.url1);
    setSecondUrl(result.url2);
    setFirstName(result.name1);
    setSecondName(result.name2);
  };

  const submitChoice = (score: Number) => {
    updateElo(firstName, secondName, score);
    setRandomTwoUrl();
  };

  useEffect(() => {
    setRandomTwoUrl();
  }, []);

  return (
    <Box p={4}>
      <Heading>Pick a pokemon that you think is more powerful!</Heading>
      <Flex gap={10}>
        <Box>
          <Image
            style={{ transition: "all 0.5s" }}
            _hover={{
              transform: "scale(1.1)",
              cursor: "pointer",
            }}
            src={firstUrl}
            onClick={() => submitChoice(0)}
          ></Image>
        </Box>
        <Box>
          <Image
            style={{ transition: "all 0.5s" }}
            _hover={{
              transform: "scale(1.1)",
              cursor: "pointer",
            }}
            src={secondUrl}
            onClick={() => submitChoice(1)}
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}
