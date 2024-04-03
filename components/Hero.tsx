"use client";

import {
  Box,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
} from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Hero() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Convert Text{" "}
          <Text as={"span"} color={"teal.400"}>
            To Images
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Generate AI images using open-AI api model Dall-e-3 by inputting
          text(s) of the desired image to be generated
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            as={"a"}
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"blue.400"}
            _hover={{ bg: "teal.500" }}
            href="/signup"
          >
            Get started
          </Button>
        </Stack>
        <Flex w={"full"}>
          {
            <Box
              height={{ sm: "30rem", lg: "70rem" }}
              mt={{ base: 12, sm: 16 }}
            />
          }
        </Flex>
      </Stack>
    </Container>
  );
}
