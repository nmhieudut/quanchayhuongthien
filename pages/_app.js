import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProgressBar from "react-scroll-progress-bar";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { color } from "src/constants/color";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <ChakraProvider
      colorModeManager={
        typeof cookies === "string"
          ? cookieStorageManager(cookies)
          : localStorageManager
      }
    >
      <ProgressBar bgcolor={color.primary} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export async function getStaticProps({ req }) {
  return {
    // first time users will not have any cookies and you may not return
    // undefined here, hence ?? is necessary
    cookies: req.headers.cookie ?? ""
  };
}
export default MyApp;
