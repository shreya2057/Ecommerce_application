"use client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import Background from "../../../app-images/signup.jpg";
export default function SignupPage() {
  const [showPassword, setshowPassword] = useState(false);
  const passwordVisibility = () => setshowPassword(!showPassword);

  return (
    <Flex direction={"row"} minHeight={"100%"} width={"100%"}>
      <Flex direction={"column"} flex={1} height={"100%"} gap={4}>
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          align={"center"}
        >
          <Box
            position={"relative"}
            width={"100%"}
            height={"100%"}
            style={{ position: "relative" }}
          >
            <Image
              src={Background}
              alt="Background image"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Box>
          <Box
            borderWidth={1}
            borderColor={"#ffd5e5"}
            p={10}
            rounded={"md"}
            shadow={"md"}
            backgroundColor={"#fff6f9"}
            position={"absolute"}
          >
            <form
            // onSubmit={handleSubmit(submit_data)}
            >
              <Stack spacing={5}>
                <Heading fontSize={"xl"}>Create an account</Heading>
                <FormControl
                // isInvalid={!!errors.name}
                >
                  <FormLabel htmlFor="name">Email</FormLabel>
                  <Input
                    width={{ base: 220, md: 350 }}
                    placeholder="Enter your email"
                    bgColor={"white"}
                    type="text"
                    shadow={"md"}
                    borderColor={"#ffd5e5"}
                    // {
                    //     ...register(
                    //         "name",
                    //         {
                    //             required: "Task name cannot be empty"
                    //         }
                    //     )
                    // }
                  />
                  <FormErrorMessage>
                    {/* {errors.name?.message} */}
                  </FormErrorMessage>
                </FormControl>
                <FormControl
                // isInvalid={!!errors.start}
                >
                  <FormLabel htmlFor="name">Password</FormLabel>

                  <InputGroup
                    size="md"
                    backgroundColor={"white"}
                    display={"flex"}
                    width={{ base: 220, md: 350 }}
                  >
                    <Input
                      borderColor={"#ffd5e5"}
                      placeholder="Enter your password"
                      bgColor={"white"}
                      type={showPassword ? "text" : "password"}
                      shadow={"md"}
                      // {
                      //     ...register(
                      //         "start",
                      //         {
                      //             required: "Start Date cannot be empty"
                      //         }
                      //     )
                      // }
                    />
                    <InputRightElement
                      width={{ base: "2rem", md: "4.5rem" }}
                      alignSelf={"center"}
                    >
                      <IconButton
                        variant={"transparentButton"}
                        width={{ base: "1rem", md: "4.5rem" }}
                        h={{ base: "0.75rem", md: "1.75rem" }}
                        size="sm"
                        aria-label="Password"
                        backgroundColor={"inherit"}
                        _hover={{ bgColor: "white" }}
                        icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        onClick={passwordVisibility}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>
                    {/* {errors.start?.message} */}
                  </FormErrorMessage>
                </FormControl>
                <Center>
                  <Box>
                    <Button variant={"primaryButtonShadow"} type="submit">
                      Signup
                    </Button>
                  </Box>
                </Center>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
