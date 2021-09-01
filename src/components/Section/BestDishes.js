import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import DishCard from "../DishCard";
import Slider from "react-slick";
import Heading from "../Heading";

export default function BestDishes({ dishes }) {
  console.log("dishes", dishes);
  const [current, setCurrent] = useState(0);
  console.log("---", current);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "60px",
    // nextArrow: <></>,
    // prevArrow: <></>,
    // eslint-disable-next-line react/display-name
    appendDots: dots => (
      <div className="text-center">
        <ul>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 919,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: (current, next) => setCurrent(next),
    afterChange: current => setCurrent(current)
  };

  return (
    <Box className="container py-12">
      <Heading label="Các món ngon nổi bật" />
      <Flex justify="center" className="w-64 h-64 my-12">
        <Image
          src={`https:${dishes[current].fields.featured.fields.file.url}`}
          alt=""
        />
        <Box>
          <Text>{dishes[current].fields.title}</Text>
          <Button>
            <Link href={`/dishes/${dishes[current].fields.slug}`}>
              Chi tiết
            </Link>
          </Button>
        </Box>
      </Flex>

      <Slider {...settings}>
        {dishes.map((dish, i) => (
          <div index={i} onClick={() => setCurrent(i)}>
            <DishCard key={dish.sys.id} dish={dish} />
          </div>
        ))}
      </Slider>
    </Box>
  );
}
