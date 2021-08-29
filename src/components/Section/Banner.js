import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Banner() {
  return (
    <div className="h-full w-full relative">
      <img src="/images/banner.jpg" alt="banner" height="200px" width="100%" />
      <Flex
        justify="center"
        align="center"
        className="absolute w-full h-full top-0 left-0"
      >
        <span className="bg-gray-100 opacity-70 p-12">
          <Text fontSize="5xl" fontWeight="600" color="teal">
            {"Quán chay hương thiền".toUpperCase()}
          </Text>
        </span>
      </Flex>
    </div>
  );
}
