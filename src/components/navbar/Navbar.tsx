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
import NavbarItems from "./NavbarItems";
import Logo from "../Logo";

function NavBar({ loggedIn }: { loggedIn: boolean }) {
  const username = "Harry Potter";
  const [menuDisplay, setMenuDisplay] = useState(false);
  return (
    <Flex
      position={"fixed"}
      direction={{ base: "column", lg: "row" }}
      width={"100%"}
      height={{ lg: "50px" }}
      minH={"50px"}
      zIndex={1}
      background={colors.brand[300]}
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
            <Logo color={colors.brand[200]} />
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
                variant={"transparentButton"}
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
