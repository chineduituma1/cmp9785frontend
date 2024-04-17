"use client";

import {
  Box,
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";
import React from "react";

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
          <Text as={"span"} color={"red.400"}>
            To Images
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Generate High Definition AI images using open-AI's API model Dall-e-3
          by inputting text(s) of the desired image to be generated
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
            Sign Up
          </Button>

          <Button
            as={"a"}
            rounded={"full"}
            px={6}
            colorScheme={"orange"}
            bg={"blue.400"}
            _hover={{ bg: "teal.500" }}
            href="/signin"
          >
            Sign In
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Box height={{ sm: "30rem", lg: "70rem" }} mt={{ base: 12, sm: 16 }}>
            <HStack>
              <Image
                boxSize="600px"
                src="https://images.unsplash.com/photo-1712174766230-cb7304feaafe?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Image
                boxSize="600px"
                src="https://images.unsplash.com/photo-1625314876522-a908c4c01167?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </HStack>
            <VStack mt="10px">
              <Image
                boxSize="600px"
                src="https://images.unsplash.com/photo-1622269854086-491e8620d031?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </VStack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
