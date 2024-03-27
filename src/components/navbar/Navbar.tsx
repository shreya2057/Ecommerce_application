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
import Logo from "../Logo";
import NavbarItems from "./NavbarItems";

function NavBar({ loggedIn }: { loggedIn: boolean }) {
  const username = "Harry Potter";
  const [menuDisplay, setMenuDisplay] = useState(false);

  return (
    <Flex
      position={"fixed"}
      direction={{ base: "column", lg: "row" }}
      width={"100%"}
      height={{ lg: "50px" }}
      minH={"52px"}
      zIndex={1}
      background={colors.brand[200]}
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
        >
          <Link href={"/"}>
            <Logo color={colors.brand[200]} />
          </Link>
        </Box>
        <Box display={{ base: "none", lg: "flex" }}>
          <NavbarItems loggedIn={loggedIn} />
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={{ base: 2, lg: 0 }}>
          {loggedIn && (
            <Menu>
              <MenuButton
                as={Button}
                variant={"transparentButton"}
                color={colors.brand[1000]}
                fontWeight={"bold"}
                leftIcon={<HiOutlineUserCircle />}
                fontSize={{ base: "2xl", md: "15px" }}
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
          <Box
            display={{ base: "flex", lg: "none" }}
            alignItems={"center"}
            onClick={() =>
              menuDisplay ? setMenuDisplay(false) : setMenuDisplay(true)
            }
            padding={"6px"}
            background={colors.brand[1000]}
            rounded={"md"}
            color={colors.white}
            marginY={{ base: 3, lg: 0 }}
          >
            <GiHamburgerMenu fontSize={"14px"} />
          </Box>
        </Box>
      </Box>
      <Collapse
        in={menuDisplay}
        animateOpacity
        transition={{
          enter: {
            duration: 0.3,
          },
          exit: { duration: 0.3 },
        }}
      >
        <NavbarItems loggedIn={loggedIn} />
      </Collapse>
    </Flex>
  );
}

export default NavBar;
