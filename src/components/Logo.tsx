import { colors } from "@/themes/colors";
import { Box, Text } from "@chakra-ui/react";
import { RiShoppingCartFill } from "react-icons/ri";

export default function Logo({ color }: { color: string }) {
  return (
    <Box display={"flex"} alignItems={"center"} gap={2}>
      <Box
        rounded={"full"}
        borderWidth={1}
        borderColor={colors.brand[1000]}
        width={"fit-content"}
        fontSize={18}
        p={1}
      >
        <RiShoppingCartFill />
      </Box>
      <Text
        fontSize={"lg"}
        fontWeight={"bold"}
        className="font"
        display={{ base: "none", lg: "inline" }}
      >
        Ecommerce App
      </Text>
    </Box>
  );
}
