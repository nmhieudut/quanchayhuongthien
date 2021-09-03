import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
export default function Banner() {
  return (
    <div className="h-screen w-full overflow-y-hidden z-0">
      <div className="circle z-0 h-screen" />
      <div className="container h-screen w-full relative flex flex-col md:flex-row justify-center items-center py-24">
        <Flex
          data-aos="fade-right"
          className="order-2 md:order-1 flex flex-col items-center md:items-start pt-12"
          flex={1}
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }}
            fontWeight="600"
            lineHeight={{ base: "2.5rem", md: "4rem" }}
            pb={6}
            textAlign={{ base: "center", md: "left" }}
            color="teal"
          >
            Chào mừng đến thiên đường ẩm thực chay
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="2rem"
            pb={6}
            textAlign={{ base: "center", md: "left" }}
          >
            Thực phẩm chay tươi và ngon. Từng món ăn chất chứa sự chân thành và
            chắc chiu từng chút một.
          </Text>
          <Link href="/#introduce">
            <a>
              <Button colorScheme="teal" size="lg">
                Khám phá ngay
              </Button>
            </a>
          </Link>
        </Flex>
        <Box
          flex={1}
          className="order-1 md:order-2 flex justify-end"
          data-aos="fade-left"
        >
          <Image
            className="left-image"
            src="/images/bannerimg.png"
            alt="banner"
            ml={4}
          />
        </Box>
      </div>
    </div>
  );
}
