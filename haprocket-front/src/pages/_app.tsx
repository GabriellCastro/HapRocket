import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { FeedbackProvider } from "../context/FeedbackContext";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FeedbackProvider>
        <Container
          maxW={{ base: "100%", md: "80%", lg: "60%" }}
          px="6"
          display="flex"
          flexDirection="column"
          minH="100vh"
        >
          <Header />
          <Component {...pageProps} />
        </Container>
      </FeedbackProvider>
    </ChakraProvider>
  );
}

export default MyApp;
