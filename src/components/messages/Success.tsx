"use client";
import { colors } from "@/themes/colors";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function SuccessMessage({
  title,
  body,
  buttonText,
  buttonFunction,
}: SuccessMessageProps) {
  return (
    <Flex direction={"column"} width={"100%"}>
      <VStack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        align={"center"}
      >
        <Box
          borderWidth={1}
          display={"flex"}
          flexDirection={"column"}
          borderColor={"#ffd5e5"}
          rounded={"base"}
          py={10}
          px={20}
          bgColor={"#fff6f9"}
          gap={5}
          alignItems={"center"}
          shadow={"lg"}
        >
          <Box textColor={colors.brand[900]} fontSize={"8xl"}>
            <BsCheckCircleFill />
          </Box>
          <Text fontSize={"xl"} color={colors.brand[800]} fontWeight={"bold"}>
            {title}
          </Text>

          <Box maxWidth={600}>
            <Text
              fontSize={"md"}
              textColor={colors.brand[800]}
              textAlign={{ base: "justify", md: "left" }}
            >
              {body}
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={{ base: "center", md: "start" }}
          >
            <Button
              variant={"primaryButtonShadow"}
              size={"md"}
              onClick={() => buttonFunction()}
            >
              {buttonText}
            </Button>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}

interface SuccessMessageProps {
  title?: string;
  body?: string;
  buttonText: string;
  buttonFunction: () => void;
}
