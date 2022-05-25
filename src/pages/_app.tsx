import { ChakraProvider } from "@chakra-ui/react";
import enviromentConsts from "services/shared/enviromentConsts";
import axios from "axios";
import Fonts from "theme/components/Fonts";
import theme from "theme/theme";

axios.defaults.baseURL = enviromentConsts.apiUrl;
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
