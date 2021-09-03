import { Box } from "@chakra-ui/react";
import React from "react";

export default function Heading({ label }) {
  return (
    <div className="section-heading flex flex-col items-center">
      <h4 className="text-5xl font-bold" style={{ color: "teal" }}>
        {label}
      </h4>
      <Box className="h-1.5 w-32 bg-black mt-4 rounded-full" bgColor="teal" />
    </div>
  );
}
