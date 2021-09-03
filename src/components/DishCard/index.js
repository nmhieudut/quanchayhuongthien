import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

export default function DishCard({ dish, isShowing }) {
  const [hover, setHover] = useState(false);
  return (
    <Box
      className="mx-12 flex justify-center py-4"
      position="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        className="h-20 w-20 rounded-full cursor-pointer transform transition duration-500"
        transform={hover && "scale(1.3)"}
        style={{ border: isShowing && "5px solid teal" }}
        src={`https:${dish.fields.featured.fields.file.url}`}
        alt={dish.title}
      />
    </Box>
  );
}
