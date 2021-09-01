import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useState } from "react";

export default function DishCard({ dish, index }) {
  const [hover, setHover] = useState(false);
  return (
    <Box
      className="mx-4 rounded-xl flex-1 flex flex-col items-center"
      style={{ backgroundColor: "teal" }}
      position="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        className="h-20 w-20 cursor-pointer transform transition duration-500"
        transform={hover && "translateY(-10px)"}
      >
        <Image
          className="absolute top-0 left-0 bottom-0 w-full h-full rounded-full"
          src={`https:${dish.fields.featured.fields.file.url}`}
          alt={dish.title}
        />
      </Box>
    </Box>
  );
}
