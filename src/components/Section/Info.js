import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsClockFill } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

export default function Info() {
  return (
    <Box className="container py-12">
      <HStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        spacing={12}
      >
        <Flex justify="center" align="center" flex={1}>
          <span className="mr-4">
            <BsClockFill size="2.5rem" color="teal" />
          </span>
          <Box>
            <Text color="teal" fontSize="xl">
              Giờ mở cửa - Đóng cửa
            </Text>
            <span className="opacity-60">6:30 A.M - 6:30 P.M</span>
          </Box>
        </Flex>
        <Flex justify="center" align="center" flex={1}>
          <span className="animateIcons mr-4">
            <CgPhone size="2.5rem" color="teal" />
          </span>
          <Box>
            <Text color="teal" fontSize="xl">
              Điện thoại
            </Text>
            <span className="opacity-60">0982720799 hoặc 0905830699</span>
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
}
