"use client";
import { colors } from "@/themes/colors";
import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiShoppingBag2Line } from "react-icons/ri";

function Banner() {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      py={10}
      px={16}
      gap={{ md: 6 }}
      background={colors.brand[800]}
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems={"center"}
    >
      <Flex
        direction={"column"}
        flex={1}
        width={"100%"}
        alignItems={{ base: "center", md: "start" }}
        alignSelf={"center"}
        maxWidth={{ lg: 600 }}
        gap={1}
      >
        <Text
          fontSize={"20px"}
          color={colors.brand[500]}
          fontFamily={"oxanium"}
        >
          Ecommerce App
        </Text>
        <Box>
          <Text
            fontSize={"15px"}
            textColor={colors.brand[300]}
            textAlign={"left"}
            display={{ base: "none", md: "flex" }}
          >
            Seamless Shopping, Boundless Selections: Dive into the Retail
            Odyssey.
          </Text>
        </Box>
      </Flex>
      <Box
        rounded={"full"}
        bgColor={"#fbd5eb"}
        width={"fit-content"}
        textColor={"#4d2f56"}
        fontSize={50}
        p={5}
      >
        <RiShoppingBag2Line />
      </Box>
    </Box>
  );
}

export default Banner;
