"use client";
import { colors } from "@/themes/colors";
import {
  Box,
  Button,
  Collapse,
  Flex,
  Menu,
  MenuButton,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdLogIn } from "react-icons/io";
import { RiShoppingCartFill } from "react-icons/ri";
import NavbarItems from "./NavbarItems";

function NavBar({ loggedIn }: { loggedIn: boolean }) {
  const username = "Harry Potter";
  const [menuDisplay, setMenuDisplay] = useState(false);
  // const
  return (
    <Flex
      position={"fixed"}
      direction={{ base: "column", lg: "row" }}
      width={"100%"}
      height={{ lg: "50px" }}
      minH={"50px"}
      zIndex={1}
      background={"#FBD5EB"}
      alignItems={{ lg: "center" }}
      color={colors.brand[1000]}
      fontWeight={"bold"}
    >
      <Box
        gap={2}
        alignItems={"center"}
        display={"flex"}
        width={"100%"}
        px={{ base: 5, lg: 16 }}
        justifyContent={"space-between"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          marginY={{ base: 3, lg: 0 }}
          gap={{ base: 2, lg: 0 }}
        >
          <Box
            display={{ base: "flex", lg: "none" }}
            alignItems={"center"}
            onClick={() =>
              menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true)
            }
          >
            <GiHamburgerMenu fontSize={"20px"} />
          </Box>
          <Link href={"/"}>
            <Box display={"flex"} alignItems={"center"} gap={2}>
              <Box
                rounded={"full"}
                borderWidth={1}
                borderColor={colors.brand[1000]}
                width={"fit-content"}
                fontSize={18}
                p={1}
                display={{ base: "none", lg: "inline" }}
              >
                <RiShoppingCartFill />
              </Box>
              <Text fontSize={"lg"} fontWeight={"bold"} className="font">
                Ecommerce App
              </Text>
            </Box>
          </Link>
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          <NavbarItems loggedIn={loggedIn} />
        </Box>
        <Box>
          {loggedIn && (
            <Menu>
              <MenuButton
                as={Button}
                background={"transparent"}
                _hover={{
                  background: "transparent",
                }}
                color={colors.brand[1000]}
                fontWeight={"bold"}
                leftIcon={<HiOutlineUserCircle fontSize={"18px"} />}
                fontSize={"15px"}
              >
                <Text display={{ base: "none", sm: "flex" }}>{username}</Text>
              </MenuButton>
            </Menu>
          )}
          {!loggedIn && (
            <Link href={"/login"}>
              <Flex alignItems={"center"} gap={2}>
                <IoMdLogIn fontSize={"18px"} />
                <Text display={{ base: "none", lg: "inline" }}>Login</Text>
              </Flex>
            </Link>
          )}
        </Box>
      </Box>
      <Collapse in={menuDisplay} animateOpacity>
        <NavbarItems loggedIn={loggedIn} />
      </Collapse>
    </Flex>
  );
}

export default NavBar;
