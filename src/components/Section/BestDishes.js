import { Box, Button, Flex, Image, Link, Tag, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import DishCard from '../DishCard';
import Slider from 'react-slick';
import Heading from '../Heading';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />
  );
}

export default function BestDishes({ dishes }) {
  console.log('dishes', dishes);
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  console.log('---', current);
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
    centerPadding: '30px',
    nextArrow: <SampleNextArrow className='w-64 h-64' />,
    prevArrow: <SamplePrevArrow />,
    // eslint-disable-next-line react/display-name
    appendDots: dots => (
      <div className='text-center -bottom-5'>
        <ul>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
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
      }
    ],
    beforeChange: (current, next) => setCurrent(next),
    afterChange: current => setCurrent(current)
  };

  return (
    <Box className='container py-12'>
      <Heading label='Các món ngon nổi bật' />
      <Box
        display='flex'
        justifyContent='center'
        className='my-12 mx-auto flex flex-col items-center md:flex-row md:justify-center max-w-4xl'
      >
        <Box flex={1} className='py-24'>
          <Text fontSize='3xl' color='teal' pb={4}>
            {dishes[current].fields.title}
          </Text>
          <Box>
            Thành phần:
            <Box>
              {dishes[current].fields.ingredients.map((item, i) => (
                <Tag className='mr-4 my-4' key={i}>
                  {item}
                </Tag>
              ))}
            </Box>
          </Box>
          <a
            href={`/dishes/${dishes[current].fields.slug}`}
            target='_blank'
            rel='noreferrer'
          >
            <Button colorScheme='teal' size='lg'>
              Chi tiết món ăn
            </Button>
          </a>
        </Box>
        <Box flex={1} display='flex' justifyContent='center'>
          <Image
            className='w-80 h-80 rounded-full transition duration-500 ease-in'
            onLoad={() => setLoaded(true)}
            opacity={loaded ? 1 : 0}
            src={`https:${dishes[current].fields.featured.fields.file.url}`}
            alt=''
          />
        </Box>
      </Box>
      <Slider {...settings}>
        {dishes.map((dish, i) => (
          <div key={dish.sys.id} onClick={() => setCurrent(i)}>
            <DishCard isShowing={current === i} dish={dish} />
          </div>
        ))}
      </Slider>
    </Box>
  );
}
