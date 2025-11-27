import { Carousel, IconButton, AspectRatio, Center } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { Image } from "@chakra-ui/react"
import type { FC } from "react";

interface IReview {
  id: number;
  imgSrc: string;
  text: string;
}

interface ReviewsProps {
  items: IReview[];
}

const Reviews : FC<ReviewsProps> = ({items}) => {
  return (
    <Carousel.Root 
        autoplay={{ delay: 2000 }}
        slideCount={items.length}
        mx="auto"
        maxW="x1"
        width="full"
    >
      <Carousel.ItemGroup width="full">
        {items.map((review: IReview, index: number) => (
          <Carousel.Item key={index} index={index}>
            <AspectRatio ratio={16 / 9} w="full">
                {review.imgSrc !== ""
                    ? <Image
                    src={review.imgSrc}
                    loading="lazy"
                    alt={`Product ${index + 1}`}
                    objectFit="contain"
                    />
                    : <AspectRatio bg="var(--accent-transparent-color)" ratio={16 / 9}>
                        <Center 
                          color="var(--text-color)" 
                          fontFamily="var(--font-primary)"
                          flex="1"
                          fontSize="1.2rem"
                        >
                          Компании уже готовятся к ИИ-трансформации...
                        </Center>
                    </AspectRatio>
                }
              </AspectRatio>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>

      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronLeft />
          </IconButton>
        </Carousel.PrevTrigger>

        <Carousel.Indicators />

        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuChevronRight />
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  )
}

export default Reviews;