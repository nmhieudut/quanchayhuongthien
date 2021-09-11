import { Box, Image, Tag, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { color } from "src/constants/color";
import DishCard from "../DishCard";
import Heading from "../Heading";
import Section from "../Section";
import Split from "../Split";

export default function BestDishes({ dishes, hasBg }) {
  const [current, setCurrent] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    // eslint-disable-next-line react/display-name
    appendDots: dots => (
      <div className="text-center -bottom-5">
        <ul>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 919,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 492,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: (current, next) => setCurrent(next),
    afterChange: current => setCurrent(current)
  };

  return (
    <Section hasBg={hasBg}>
      <Box className="semi-container p-12">
        <Heading label="Những món ăn nổi bật" />
        <Split
          className="mt-4"
          left={
            <Box
              flex={1}
              className="pl-0 md:pl-12 flex flex-col justify-between items-center md:items-start"
            >
              <Text
                fontSize="3xl"
                color={color.primary}
                pb={4}
                fontWeight={600}
              >
                {dishes[current].fields.title}
              </Text>
              <Text fontSize="lg" pb={4}>
                Nguyên liệu:
              </Text>
              <Box>
                {dishes[current].fields.ingredients.map((item, i) => (
                  <Tag className="mr-4 mb-4" key={i}>
                    {item}
                  </Tag>
                ))}
              </Box>
              <a
                className="btn mt-4"
                href={`/dishes/${dishes[current].fields.slug}`}
                target="_blank"
                rel="noreferrer"
              >
                Chi tiết món ăn
              </a>
            </Box>
          }
          right={
            <img
              className="transition duration-500 ease-in h-auto"
              src={`https:${dishes[current].fields.featured.fields.file.url}`}
              alt=""
              width={400}
              style={{ height: "100%" }}
            />
          }
        />
        <div style={{ position: "relative" }}>
          <Slider {...settings} className="my-12">
            {dishes.map((dish, i) => (
              <div key={dish.sys.id} onClick={() => setCurrent(i)}>
                <DishCard isShowing={current === i} dish={dish} />
              </div>
            ))}
          </Slider>
        </div>
      </Box>
    </Section>
  );
}
