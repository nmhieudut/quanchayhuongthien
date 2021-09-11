import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "src/constants/color";
import Section from "../Section";
import Split from "../Split";

export default function Introduce({ hasBg }) {
  return (
    <Section hasBg={hasBg}>
      <div
        id="introduce"
        className="container flex flex-col md:flex-row justify-center items-center py-12"
      >
        <Split
          left={
            <Image
              src="/images/about-img.png"
              alt="banner"
              width="100%"
              height="100%"
            />
          }
          right={
            <div className="flex flex-col">
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
                Thực phẩm chay tươi và ngon. Từng món ăn chất chứa sự chân thành
                và chắc chiu từng chút một.
              </Text>
            </div>
          }
        ></Split>
      </div>
    </Section>
  );
}
