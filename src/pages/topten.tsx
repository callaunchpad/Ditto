import { Box, Button, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getTopTen } from "../db/utils/pokemon";

export default function TopTen() {

  const [topTen, setTopTen] = useState<any>([]);

  const getTopTenPokemon = async () => {
    const result: any = await getTopTen();
    let resultArr = [];
    for (let i = 0; i < 10; i++) {
      resultArr.push(result[i.toString()]);
    }
    setTopTen(resultArr);
  };

  useEffect(() => {
    getTopTenPokemon();
  }, [])

  return (
    <Box p={4}>
      <Heading>Top ten powerful pokemon!</Heading>
      <Flex gap={10}>
        {topTen.map((pokemon: any) => <Box>
          <Image
            style={{ transition: "all 0.5s" }}
            _hover={{
              transform: "scale(1.1)",
              cursor: "pointer",
            }}
            src={pokemon[0]}
          ></Image>
        </Box>)}
        
        
      </Flex>
    </Box>
  );
}
