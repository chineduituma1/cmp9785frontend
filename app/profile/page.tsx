"use client";

import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  useRadioGroup,
  RadioGroup,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  HStack,
} from "@chakra-ui/react";

export default function profile() {
  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="teal"
        color="white"
      ></Flex>

      <Flex w="85%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <Box>
          <Heading
            fontWeight={300}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"150%"}
          >
            Welcome, User
          </Heading>
          <Text color={"gray.500"} maxW={"5xl"} fontSize="xl">
            You have 500 credits to use for image generation. Each image
            generation will cost 10 credits.
            <Text color="black" fontSize="md" mt={2}>
              Kindly input the text in the space provided below and select the
              specifications of the image to be generated.
            </Text>
          </Text>
        </Box>

        <Box p="7" color="black" mt={5}>
          <Text mb="20px">Text: </Text>
          <Input placeholder="Kindly input text here" size="sm" />
        </Box>

        <Box p="7" color="black" mt={5}>
          <Text mb="20px">Number of Images: </Text>
          <Input
            placeholder="Kindly input number of images here"
            size="sm"
            width="30%"
          />
        </Box>

        <Box p="7" mt={5}>
          <FormControl as="fieldset">
            <FormLabel as="legend">Image Size</FormLabel>
            <RadioGroup defaultValue="Itachi">
              <HStack spacing="24px">
                <Radio value="1024x1024">1024x1024</Radio>
                <Radio value="1024x1792">1024x1792</Radio>
                <Radio value="1792x1024">1792x1024</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select an image size</FormHelperText>
          </FormControl>
        </Box>

        <Box p="7" mt={10}>
          <FormControl as="fieldset">
            <FormLabel as="legend">Image Quality</FormLabel>
            <RadioGroup defaultValue="Itachi">
              <HStack spacing="24px">
                <Radio value="Standard">Standard</Radio>
                <Radio value="HD">HD</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select an image quality</FormHelperText>
          </FormControl>
        </Box>

        <Box mt={3}>
          <Button colorScheme="blue" _hover={{ bg: "teal.300" }}>
            Generate Image
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}
