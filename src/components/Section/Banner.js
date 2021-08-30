import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Banner() {
  return (
    <div className="h-screen w-full overflow-y-hidden z-0">
      <div className="circle z-0 h-screen" />
      <div className="container h-screen w-full relative flex flex-col md:flex-row justify-center items-center pt-24">
        <Flex
          className="order-2 md:order-1 flex flex-col items-center md:items-start"
          flex={1}
        >
          <Text
            fontSize="5xl"
            fontWeight="600"
            lineHeight="4rem"
            pb={6}
            textAlign={{ base: "center", md: "left" }}
          >
            Chào mừng đến thiên đường ẩm thực chay
          </Text>
          <Text
            fontSize="base"
            lineHeight="2rem"
            pb={6}
            textAlign={{ base: "center", md: "left" }}
          >
            Thực phẩm chay tươi và ngon. Từng món ăn chất chứa từng sự chân
            thành và chắc chiu từng chút một.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            borderRadius={999}
            py={8}
            px={12}
          >
            Khám phá ngay
          </Button>
        </Flex>
        <Box flex={1} className="order-1 md:order-2 flex justify-end">
          <Image src="/images/bannerimg.png" alt="banner" ml={4} />
        </Box>
      </div>
    </div>
  );
}
