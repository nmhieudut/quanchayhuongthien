import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Section({ className, hasBg, children }) {
  const bg = useColorModeValue("gray.50", "gray.900");
  return (
    <Box bg={hasBg && bg} py={4} className={className}>
      {children}
    </Box>
  );
}
