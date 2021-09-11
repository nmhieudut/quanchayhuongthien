import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { color } from "src/constants/color";
import Split from "../Split";
export default function Banner() {
  return (
    <Box className="h-screen w-full overflow-y-hidden z-0">
      <div className="container h-screen w-full relative flex justify-center items-center">
        <Split
          left={
            <>
              <Text
                as="h2"
                fontSize={{ base: "3xl", lg: "5xl" }}
                textAlign={{ base: "center", md: "left" }}
                color={color.primary}
              >
                Quán chay
              </Text>
              <Text
                as="h1"
                fontSize={{ base: "4xl", lg: "7xl" }}
                fontWeight="600"
                py={8}
                textAlign={{ base: "center", md: "left" }}
                color={color.primary}
              >
                Hương Thiền
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="2rem"
                textAlign={{ base: "center", md: "left" }}
              >
                Thực phẩm chay tươi và ngon. Từng món ăn chất chứa sự chân thành
                và chắc chiu từng chút một.
              </Text>
              <Link href="/#introduce">
                <a className="btn">Khám phá ngay</a>
              </Link>
            </>
          }
          right={<img src="/images/banner-img.png" alt="banner" />}
        />
      </div>
    </Box>
  );
}
