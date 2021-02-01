import { ChakraProvider } from "@chakra-ui/react";
import enviromentConsts from "services/shared/enviromentConsts";
import axios from "axios";

axios.defaults.baseURL = enviromentConsts.apiUrl;
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
