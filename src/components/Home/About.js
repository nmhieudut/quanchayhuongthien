import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { color } from "src/constants/color";
import Heading from "../Heading";
import Section from "../Section";

export default function About({ hasBg }) {
  return (
    <Section hasBg={hasBg}>
      <Box className="container py-12">
        <Heading label="Về chúng tôi" />
        <Box display="flex" my={12} w="full">
          <figure className="flex flex-col md:flex-row rounded-xl p-8 md:p-0 gap-6">
            <Flex justify="center" align="center" flex={1}>
              <Image
                className="w-48 h-48 md:w-96 md:h-96 md:rounded-none rounded-full mx-auto"
                src="/images/owner.jpg"
                alt=""
              />
            </Flex>

            <Flex
              flex={1}
              flexDirection="column"
              justify="center"
              align="flex-start"
            >
              <blockquote>
                <p className="text-base leading-8">
                  “LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremL
                  oremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremL
                  oremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                  LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <Text className="text-xl" color={color.primary}>
                  Chị Mai Hương
                </Text>
                <Text className="text-gray-500 italic">- Chủ quán</Text>
              </figcaption>
            </Flex>
          </figure>
        </Box>
      </Box>
    </Section>
  );
}
