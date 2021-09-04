import { ChakraProvider } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProgressBar from "react-scroll-progress-bar";
import "../styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { color } from "src/constants/color";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <ChakraProvider>
      <ProgressBar bgcolor={color.primary} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
