"use client";
import NavBar from "@/components/navbar";
import theme from "@/themes";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const excludeNavbar = ["/login", "/signup"];
  const includeNavbar = !excludeNavbar.includes(pathname);
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ChakraProvider theme={theme}>
        <Flex width={"100dvw"} minHeight={"100vh"} flexDirection={"column"}>
          {includeNavbar && <NavBar loggedIn={true} />}
          <Flex
            flex={1}
            width={"100dvw"}
            minHeight={"100%"}
            marginTop={includeNavbar ? "52px" : 0}
          >
            {children}
          </Flex>
        </Flex>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
