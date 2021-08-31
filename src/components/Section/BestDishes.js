import { Box } from "@chakra-ui/react";
import React from "react";
import DishCard from "../DishCard";
import Heading from "../Heading";

export default function BestDishes({ dishes }) {
  console.log("dishes", dishes);
  return (
    <Box className="container py-12">
      <Heading label="Những món bán chạy" />
      <Box
        display="grid"
        gridGap="1rem"
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)"
        }}
        my={12}
      >
        {dishes.map((dish, i) => (
          <DishCard index={i} key={dish.sys.id} dish={dish} />
        ))}
      </Box>
    </Box>
  );
}
