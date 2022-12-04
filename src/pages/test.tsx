import { Box, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import { useState } from "react";

import { uploadPet } from "../db/utils/pokemon";

export default function Test() {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState(null);

  const [resultImageUrl, setResultImageUrl] = useState("");

  const handleImageAsFile = (e: any) => {
    const image = e.target.files[0];
    setImageAsFile(image);
    console.log(imageAsFile);
  };

  const handleFireBaseUpload = async (e: any) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === null) {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    } else {
      const result = await uploadPet(imageAsFile);
      console.log(result);
      setResultImageUrl(result.public_url);
    }
  };

  return (
    <Box p={4}>
      <Heading>Upload an image of your pet!</Heading>
      <form onSubmit={handleFireBaseUpload}>
        <input type="file" onChange={handleImageAsFile} />
        <button>Submit</button>
      </form>
      <Flex gap={10}>
        {imageAsFile ? (
          <Box >
            <Image w="300px" src={URL.createObjectURL(imageAsFile)} />
          </Box>
        ) : (
          <></>
        )}

        {resultImageUrl != "" ? (
          <Box >
            <Image w="300px" src={resultImageUrl} />
          </Box>
        ) : (
          <></>
        )}

        {imageAsFile && resultImageUrl == "" ? <Spinner></Spinner> : <></>}
      </Flex>
    </Box>
  );
}
