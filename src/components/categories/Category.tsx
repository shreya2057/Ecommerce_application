import { allCategories } from "@/constants/categories";
import CategoryList from "./CategoryList";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { BiListUl } from "react-icons/bi";
import { colors } from "@/themes/colors";

export default function Category() {
  return (
    <Flex
      width={"100%"}
      maxH={"100%"}
      bgColor={colors.brand[200]}
      direction={"column"}
    >
      <Flex
        px={5}
        py={3}
        display={"flex"}
        gap={1}
        flexDirection={"row"}
        height={"min-content"}
        overflow={"hidden"}
      >
        <Box alignSelf={"center"} fontSize={"xl"} textColor={"#653059"}>
          <BiListUl />
        </Box>
        <Box>
          <Heading fontSize={"xl"} textColor={"#653059"}>
            Categories
          </Heading>
        </Box>
      </Flex>
      {/* <Divider borderColor={"#df9fd1"} /> */}
      <Flex
        height={"55%"}
        direction={"column"}
        overflowY={"scroll"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0px",
          },
        }}
      >
        {/* {!categoryQuery.isFetchedAfterMount && (
            <Flex
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              align={"center"}
              gap={2}
            >
              <Spinner size={"lg"} color="brand.700" />
              <Text fontWeight={"bold"} textColor={"brand.900"}>
                Loading...
              </Text>
            </Flex>
          )} */}
        {/* {categoryQuery.data?.status === 200 && */}
        {allCategories &&
          allCategories?.map((items: any, index: number) => (
            <CategoryList
              category={items}
              onClickFunction={(event) => {
                //   selectCategory(event, items);
              }}
              selected={items}
              key={index}
            />
          ))}
      </Flex>
    </Flex>
  );
}
