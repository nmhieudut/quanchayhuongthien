import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Section({ className, hasBg, children }) {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Box margin="2rem 0" bg={hasBg && bg} className={className}>
      {children}
    </Box>
  );
}
