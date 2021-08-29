import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Heading from "../Heading";

export default function About() {
  return (
    <Box className="container py-24">
      <Heading label="Về chúng tôi" />
      <Box display="flex" my={24} w="full">
        <figure className="md:flex rounded-xl p-8 md:p-0">
          <Image
            className="w-48 h-48 md:w-96 md:h-96 md:rounded-none rounded-full mx-auto"
            src="/images/owner.jpg"
            alt=""
          />
          <Flex
            flexDirection="column"
            justify="center"
            align="flex-start"
            className="pt-6 md:p-8 space-y-4"
          >
            <blockquote>
              <p className="text-lg font-semibold">
                “LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremL
                oremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremL
                oremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <Text className="text-xl" color="teal">
                Chị Mai Hương
              </Text>
              <Text className="text-gray-500 italic">- Chủ quán</Text>
            </figcaption>
          </Flex>
        </figure>
      </Box>
    </Box>
  );
}
