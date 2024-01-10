import { Flex } from "@chakra-ui/react";

export default function Layout({
    children,
    admin,
    customer
}:{
    children:React.ReactNode,
    admin: React.ReactNode,
    customer: React.ReactNode
}){
    const authorized = false;
    return(
        <Flex minH={"100%"} width={"100%"}>
            {children}
            {
                authorized ? admin : customer
            }
        </Flex>
    );
}