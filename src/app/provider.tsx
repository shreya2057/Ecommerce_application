"use client";
import NavBar from "@/components/navbar/Navbar";
import theme from "@/themes";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ChakraProvider theme={theme}>
        <Flex width={"100dvw"} minHeight={"100vh"} flexDirection={"column"}>
          <NavBar loggedIn={true} />
          <Flex flex={1} width={"100dvw"} minHeight={"100%"} marginTop={"52px"}>
            {children}
          </Flex>
        </Flex>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
