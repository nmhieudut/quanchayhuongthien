import React from "react";
import Link from "next/link";
import { navs } from "src/constants/navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";

export default function Header() {
  const bg = useColorModeValue("gray.300", "black");
  const color = useColorModeValue("black", "white");
  return (
    <Box className="fixed top-0 left-0 z-50 w-full" bg={bg} color={color}>
      <div className="container py-4 flex">
        <div className="flex justify-center">QCHT</div>
        <div className="ml-auto flex justify-center">
          {navs.map((n, i) => (
            <Link key={i} href={n.to}>
              <a className="ml-14 opacity-50 hover:opacity-100">{n.label}</a>
            </Link>
          ))}
        </div>
      </div>
    </Box>
  );
}
