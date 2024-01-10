'use client'
import {
    Box,
    Flex,
    IconButton,
    Text,
    useBreakpointValue
} from "@chakra-ui/react";
import { HiOutlineUserCircle, HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

function NavBar(pt: {loggedIn: Boolean}){
    const username = "harry potter";
    const [showNavMenu, setShowNavMenu] = useState(false)
    const menuVisibility = useBreakpointValue({"base": !showNavMenu, "md": false})
    const buttonVisibility = useBreakpointValue({"base": false, "md": true})
    const toggleMenu = ()=>{
        if(showNavMenu){
            setShowNavMenu(false);
        } else{
            setShowNavMenu(true)
        }
    }
    return(
        <Flex 
            direction={{"base": "column", "md": "row"}} 
            width={"100%"} 
            bgColor={"#653059"}
            py={{"md":2}}            
            justifyContent={"space-between"} 
            align={{"base":"start","md":"center"}}
        >
            <Flex gap={2} px={10} py={{"base":3, "md":0}} >
                <IconButton 
                    hidden={buttonVisibility}
                    variant={"iconButton"}
                    aria-label="Toggle Navigation" 
                    icon={<GiHamburgerMenu/>}
                    onClick={toggleMenu}
                />
                <Link href={"/"}>
                    <Text 
                        fontSize={"xl"} 
                        fontWeight={"bold"} 
                        textColor={"#fffdf0"}
                    >
                        Ecommerce App
                    </Text>
                </Link>
            </Flex>
            <Flex 
                flex={{"base": 1, "md":0}}
                width={{"base": "100%"}}
                hidden= {menuVisibility}
                bgColor={{"base": "#b87c94", "md": "inherit"}}
                direction={{"base": "column", "md": "row"}} 
                gap={{"base": 1,"md":6}} 
                height={"100%"} 
                fontSize={"xl"} 
                fontWeight={"bold"} 
                textColor={"#fffdf0"}
                px={{"base": 10, "md":10}} 
                py={{"base": 3, "md":0}} 
                align={{"base":"start","md":"center"}}
            >
                <Link href={"/shopping"}>
                    <Text>
                        Shopping
                    </Text>
                </Link>
                <Link href={"/orders"}>
                    <Text>
                        Orders
                    </Text>
                </Link>
                {
                    !pt.loggedIn
                    &&
                    <Flex 
                        direction={{"base": "column", "md": "row"}} 
                        gap={{"base": 1,"md":6}}
                        align={{"base":"start","md":"center"}}
                    >
                        <Link href={"/"}>
                            <Text>
                                Login
                            </Text>
                        </Link>
                        <Link href={"/signup"}>
                            <Text>
                                Signup
                            </Text>
                        </Link>
                    </Flex>
                }
                {
                    pt.loggedIn
                    &&
                    <Flex 
                        direction={{"base": "column", "md": "row"}}
                        gap={{"base": 1,"md":6}}
                        align={{"base":"start","md":"center"}}
                    >
                        <Link href={"/cart"}>
                            <Box display={"flex"} gap={2}>
                                <Box display={"flex"} alignSelf={"center"}>
                                    <HiOutlineShoppingCart/>
                                </Box>
                                <Text>Cart</Text>  
                            </Box>
                        </Link>
                        <Link href={"/"}>
                            <Box 
                                display={"flex"}
                                justifyContent={"center"}
                                alignContent={"center"}
                                width={130}
                                gap={1.5}  
                                bgColor={{"md": "#b87c94"}} 
                                py={{"md":1}} 
                                px={{"md":2}} 
                                rounded={{"md": "base"}} 
                                shadow={{"md":"md"}}
                                fontSize={{"base":"lg","md":"sm"}}
                            >
                                <Box display={"flex"} alignSelf={"center"}>
                                    <HiOutlineUserCircle/>
                                </Box>
                                <Text fontSize={"base"}>{username}</Text>  
                            </Box>
                        </Link>
                    </Flex>
                }
            </Flex>
        </Flex>
    );
}

export default NavBar;