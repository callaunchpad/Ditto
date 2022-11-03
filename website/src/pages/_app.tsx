import { AppProps } from "next/app";
import {
  ChakraProvider,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  Center,
  Box,
} from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";
import { ErrorBoundary } from "react-error-boundary";
import { WarningTwoIcon } from "@chakra-ui/icons";

import '../styles.css'
import { theme } from "../utils/theme";
import Navbar from "../components/utils/Navbar";

export default function DittoApp({ Component, pageProps }: AppProps) {
  const { onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary
        FallbackComponent={() => (
          <Modal isOpen onClose={onClose} isCentered preserveScrollBarGap>
            <ModalOverlay />
            <ModalContent maxW={{ base: "90%", sm: "450px" }}>
              <ModalHeader>Unknown Error</ModalHeader>
              <ModalBody>
                <Center>
                  <WarningTwoIcon boxSize={16} color="red.500" />
                </Center>
              </ModalBody>
              <ModalFooter>
                Unfortunately, an unexpected error has occurred. Please reload
                the page to try again.
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
        onError={console.error}
      >
        <NextNProgress height={5} />
        <Box backgroundColor="ditto.veryLightPurple" minHeight='calc(100vh)'>
          <Navbar></Navbar>
          <Component {...pageProps}/>
        </Box>
      </ErrorBoundary>
    </ChakraProvider>
  );
}
