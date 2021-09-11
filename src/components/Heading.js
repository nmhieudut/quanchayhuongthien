import { Box } from "@chakra-ui/react";
import React from "react";
import { color } from "src/constants/color";
export default function Heading({ label }) {
  return (
    <div className="section-heading flex flex-col items-center">
      <h6 className="text-4xl font-bold" style={{ color: color.primary }}>
        {label}
      </h6>
      <Box
        className="h-1.5 w-32 bg-black mt-4 rounded-full"
        bgColor={color.primary}
      />
    </div>
  );
}
