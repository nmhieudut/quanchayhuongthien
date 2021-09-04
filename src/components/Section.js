import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Section({ className, hasBg, children }) {
  const bg = useColorModeValue("gray.100", "gray.900");
  return (
    <Box marginTop="2rem" bg={hasBg && bg} className={className}>
      {children}
    </Box>
  );
}
