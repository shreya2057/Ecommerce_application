import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "./colors";

const baseStyles = {
  paddingX: 10,
  paddingY: 2,
};

const primaryButton = defineStyle({
  ...baseStyles,
  background: colors.white,
  border: "1px solid",
  borderColor: colors.brand[700],
});

const primaryButtonShadow = defineStyle({
  ...baseStyles,
  background: colors.brand[400],
  shadow: "md",
  color: colors.brand[800],
  fontWeight: "bold",
  _hover: {
    background: colors.brand[500],
    _disabled: {
      background: colors.brand[400],
    },
  },
});

const transparentButton = defineStyle({
  ...baseStyles,
  background: "transparent",
  _hover: {
    background: "transparent",
  },
});

export const buttonTheme = defineStyleConfig({
  variants: {
    primaryButton,
    primaryButtonShadow,
    transparentButton,
  },
  sizes: {
    sm: {
      fontSize: "sm",
    },
    md: {
      fontSize: "md",
      //   fontWeight: "bold",
    },
  },
  defaultProps: {
    variant: "primaryButton",
    size: "md",
  },
});
