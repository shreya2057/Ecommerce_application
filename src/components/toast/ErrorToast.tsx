import { colors } from "@/themes/colors";
import { ToastProps } from "@/types/props";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";

export default function ErrorToast({ title }: ToastProps) {
  return (
    <Box
      display={"flex"}
      color={colors.brand[800]}
      gap={4}
      p={3}
      bg={colors.brand[200]}
      fontSize={"sm"}
      fontWeight={"bold"}
      rounded={"md"}
      shadow={"md"}
      backgroundColor={colors.brand[500]}
    >
      <WarningTwoIcon alignSelf={"center"} />
      <Text>{title}</Text>
    </Box>
  );
}
