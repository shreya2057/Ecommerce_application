import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

function CategoryList(pt: {
  category: string;
  onClickFunction: (event: any) => void;
  selected: String;
}) {
  const activeStatus = pt.category === pt.selected;
  return (
    <Flex direction={"column"}>
      <Button
        justifyContent={"start"}
        rounded={"none"}
        backgroundColor={"inherit"}
        onClick={(event: any) => pt.onClickFunction(event)}
        id={pt.category}
        _active={{
          backgroundColor: "#eda6c8",
        }}
        _hover={{
          backgroundColor: "#eda6c8",
        }}
        // isActive={activeStatus ? true : false}
      >
        <Box
          display={"flex"}
          gap={1}
          flexDirection={"row"}
          my={2}
          mx={10}
          fontWeight={"bold"}
          textColor={"#653059"}
        >
          <Box display={"flex"} alignSelf={"center"}>
            <BiRightArrow />
          </Box>
          <Text>{pt.category}</Text>
        </Box>
      </Button>
      {/* <Divider borderColor={"#df9fd1"} /> */}
    </Flex>
  );
}

export default CategoryList;
