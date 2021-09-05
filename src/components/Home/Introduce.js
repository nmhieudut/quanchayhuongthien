import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "src/constants/color";
import Section from "../Section";

export default function Introduce({ hasBg }) {
  return (
    <Section hasBg={hasBg}>
      <div
        id="introduce"
        className="container flex flex-col md:flex-row justify-center items-center py-12"
      >
        <Flex
          data-aos="fade-right"
          className="order-2 md:order-1 flex flex-col items-center md:items-start pt-12"
          flex={1}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="600"
            lineHeight={{ base: "2.5rem", md: "4rem" }}
            pb={6}
            textAlign={{ base: "center", md: "left" }}
            color={color.primary}
          >
            Món chay ngon chỉ có tại đây
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
        </Flex>
        <Box
          flex={1}
          className="order-1 md:order-2 flex justify-end"
          data-aos="fade-left"
        >
          <Image
            src="/images/vegetable.png"
            alt="banner"
            ml={4}
            width="100%"
            height="100%"
          />
        </Box>
      </div>
    </Section>
  );
}
