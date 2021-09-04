import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { data } from "autoprefixer";
import React from "react";
import { BsClockFill } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import { SiGooglecalendar } from "react-icons/si";
import { color } from "src/constants/color";
const start = 6 * 60 + 30;
const end = 18 * 60 + 30;
const now = new Date().getHours() * 60 + new Date().getMinutes();
function isOpenNow() {
  if (start <= now && now <= end) return true;
  return false;
}

export default function Info() {
  return (
    <Box className="container py-12">
      <HStack
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="flex-start"
        spacing={{ base: 0, md: 12 }}
      >
        <Flex justify="center" align="center" flex={1} pb={4}>
          <span className="mr-4">
            <BsClockFill size="2.5rem" color={color.primary} />
          </span>
          <Box>
            <Text color={color.primary} fontSize="xl">
              Giờ mở cửa - Đóng cửa
            </Text>
            <span className="opacity-60">6:30 A.M - 6:30 P.M</span>
            <div>
              {isOpenNow() ? (
                <Text color="green">Đang mở cửa</Text>
              ) : (
                <Text color="red">Đang đóng cửa</Text>
              )}
            </div>
          </Box>
        </Flex>
        <Flex justify="center" align="center" flex={1} pb={4}>
          <span className="animateIcons mr-4">
            <CgPhone size="2.5rem" color={color.primary} />
          </span>
          <Box>
            <Text color={color.primary} fontSize="xl">
              Điện thoại
            </Text>
            <span className="opacity-60">0982720799 hoặc 0905830699</span>
          </Box>
        </Flex>
        <Flex justify="center" align="center" flex={1} pb={4}>
          <span className="mr-4">
            <SiGooglecalendar size="2.5rem" color={color.primary} />
          </span>
          <Box>
            <Text color={color.primary} fontSize="xl">
              Ngày nghỉ
            </Text>
            <span className="opacity-60">Tết, mùng 2 và 16 âm lịch</span>
          </Box>
        </Flex>
      </HStack>
    </Box>
  );
}
