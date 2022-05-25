import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "theme/components/Fonts";
import theme from "theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
