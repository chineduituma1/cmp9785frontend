"use client";

import React, { useState, useEffect } from "react";
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
  Image,
  InputGroup,
  InputLeftElement,
  useRadioGroup,
  RadioGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  HStack,
  useToast,
} from "@chakra-ui/react";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  const [text, setText] = useState<string>("");
  const [numImages, setNumImages] = useState("");
  const [imageQuality, setImageQuality] = useState<string>("hd");
  const [imageSize, setImageSize] = useState<string>("1024x1024");
  const [imageUrl, setImageUrl] = useState<string>("");

  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const data = {
        text,
        n: 1,
      };

      const response = await fetch("http://127.0.0.1:8000/api/text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to generate image");
      }

      const imageData = await response.json();
      setImageUrl(imageData.url);
      toast({
        title: "Congratulations, Image generated successfully.",
        description: "Click download to save.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Oops, Image generation failed.",
        description:
          "Kindly retry. Make sure all fields are entered and specifications selected",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  const handleClear = () => {
    setText("");
    setNumImages("");
    setImageQuality("hd");
    setImageSize("1024x1024");
  };
  const handleDownload = () => {
    if (!imageUrl) {
      toast({
        title: "No image generated",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-left",
      });
      return;
    }

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = "generated_image.png"; // Set the filename for download
    anchor.click(); // Trigger the click event to start download
  };

  return (
    <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
      <Flex
        w="15%"
        flexDir="column"
        alignItems="center"
        backgroundColor="teal"
        color="white"
      >
        <Button
          as={"a"}
          mt="1800px"
          rounded={"full"}
          px={6}
          colorScheme={"orange"}
          bg={"red.400"}
          _hover={{ bg: "blue.500" }}
          href="/"
        >
          Sign Out
        </Button>
      </Flex>

      <Flex w="85%" p="3%" flexDir="column" overflow="auto" minH="100vh">
        <Box>
          <Heading
            fontWeight={500}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"150%"}
          >
            Welcome
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
          <Input
            placeholder="Kindly input text here"
            size="sm"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Box>

        <Box p="7" mt={5}>
          <FormControl as="fieldset">
            <FormLabel as="legend">Image Quality</FormLabel>
            <RadioGroup defaultValue={imageQuality} onChange={setImageQuality}>
              <HStack spacing="24px">
                <Radio value="HD">HD</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select an image quality</FormHelperText>
          </FormControl>
        </Box>

        <Box p="7" mt={5}>
          <FormControl as="fieldset">
            <FormLabel as="legend">Image Size</FormLabel>
            <RadioGroup defaultValue={imageSize} onChange={setImageSize}>
              <HStack spacing="24px">
                <Radio value="1024x1024">1024x1024</Radio>
              </HStack>
            </RadioGroup>
            <FormHelperText>Select an image size</FormHelperText>
          </FormControl>
        </Box>

        <HStack mt={75}>
          <Button
            colorScheme="blue"
            _hover={{ bg: "teal.300" }}
            onClick={handleSubmit}
          >
            Generate Image
          </Button>

          <Button
            ml={20}
            colorScheme="blue"
            _hover={{ bg: "teal.300" }}
            onClick={handleClear}
          >
            Clear Fields
          </Button>
        </HStack>

        <Flex mt={150}>
          <Card maxW="lg">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md"> Generate Image : </Heading>
                {imageUrl ? (
                  <Image boxSize="500px" src={imageUrl} alt="Generated Image" />
                ) : (
                  <Text>No image generated</Text>
                )}
                <Text>Click the button below to download the image.</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleDownload}
                >
                  Download
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Profile;
