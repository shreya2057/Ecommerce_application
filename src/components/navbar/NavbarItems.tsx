import { colors } from "@/themes/colors";
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";
import { CgArrowRight } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SiGnuprivacyguard } from "react-icons/si";

// Static Content
const routes: Array<routeType> = [
  { path: "/", page: "Home", conditional: false },
  { path: "/shopping", page: "Shopping", conditional: false },
  { path: "/", page: "Offers", conditional: false },
  { path: "/orders", page: "Orders", conditional: true, loggedInRoute: true },
  {
    icons: <HiOutlineShoppingCart />,
    path: "carts",
    page: "Cart",
    conditional: true,
    loggedInRoute: true,
  },
  { path: "/", page: "Contact", conditional: true, loggedInRoute: false },
  {
    icons: <SiGnuprivacyguard />,
    path: "/",
    page: "Sign up",
    conditional: true,
    loggedInRoute: false,
  },
];

export default function NavbarItems({ loggedIn }: { loggedIn: boolean }) {
  return (
    <Box
      display={"flex"}
      width={{ base: "100%", lg: "unset" }}
      paddingBottom={{ base: 4, lg: 0 }}
    >
      <UnorderedList
        listStyleType={"none"}
        margin={0}
        width={{ base: "100%", lg: "unset" }}
        px={{ base: 5, lg: 0 }}
        backgroundColor={"transparent"}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        gap={{ lg: 8 }}
      >
        {routes?.map(({ icons, path, page, conditional, loggedInRoute }) => (
          <ListItem
            paddingY={{ base: 2, lg: 0 }}
            width={{ base: "100%", lg: "unset" }}
            key={path + page}
            display={
              conditional
                ? loggedIn === loggedInRoute
                  ? "flex"
                  : "none"
                : "flex"
            }
          >
            <Link href={path} style={{ width: "100%" }}>
              <Flex alignItems={"center"} gap={2} width={"100%"}>
                <Flex
                  display={{ base: "flex", lg: "none" }}
                  rounded={"full"}
                  borderWidth={1}
                  borderColor={colors.brand[1000]}
                >
                  <CgArrowRight fontSize={"12px"} />
                </Flex>
                {icons && (
                  <Box display={{ base: "none", lg: "inline" }}>{icons}</Box>
                )}
                <Text>{page}</Text>
              </Flex>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
}

interface routeType {
  icons?: ReactNode;
  path: string;
  page: string;
  conditional: boolean;
  loggedInRoute?: boolean;
}
