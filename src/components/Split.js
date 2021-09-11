import { Box } from "@chakra-ui/react";
import React from "react";

export default function Split({ left, right }) {
  return (
    <Box className="flex flex-col lg:flex-row gap-4 justify-center items-center my-8">
      <Box className="flex-1 flex flex-col items-center lg:items-start">
        {left}
      </Box>
      <Box className="flex-1 flex justify-center items-center">{right}</Box>
    </Box>
  );
}
