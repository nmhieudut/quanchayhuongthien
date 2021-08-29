import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { useState } from "react";

export default function DishCard({ dish }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={`/dishes/${dish.fields.slug}`}
      position="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative h-64 overflow-hidden cursor-pointer">
        <Image
          transform={hover && "scale(1.1)"}
          className="absolute top-0 bottom-0 w-full h-full transform transition duration-500"
          src={`https:${dish.fields.featured.fields.file.url}`}
          alt={dish.title}
        />
      </div>

      <Box
        opacity={hover ? 0.4 : 0}
        position="absolute"
        className="w-full h-full bottom-0 flex justify-center items-end transition duration-500"
        style={{
          background: "rgb(203,202,222)",
          background:
            "linear-gradient(180deg, rgba(203,202,222,1) 0%, rgba(0,128,128,1) 100%)"
        }}
      />

      <Text
        width="full"
        color="#fff"
        textAlign="center"
        position="absolute"
        bottom={12}
        opacity={hover ? 1 : 0}
        className="transition duration-500"
        fontSize="xl"
      >
        {dish.fields.title}
      </Text>
    </Link>
  );
}
