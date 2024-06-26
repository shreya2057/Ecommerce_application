"use client";

import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";

const theme = extendTheme({
  fonts: {
    oxanium: "Oxanium",
    interMedium: "InterMedium",
    interBold: "InterBold",
  },
  components: {
    Button: buttonTheme,
  },
});

export default theme;
