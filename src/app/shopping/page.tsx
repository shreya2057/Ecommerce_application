"use client";
import Banner from "@/components/Banner";
import { colors } from "@/themes/colors";
import {
  useToast,
  Box,
  Divider,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  useBreakpointValue,
  Button,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { BiCart, BiListUl } from "react-icons/bi";
import CategoryList from "../../components/categories/CategoryList";
// import ItemCard from "../../components/ItemCard";
// import { SearchIcon } from "@chakra-ui/icons";
import { useQuery } from "react-query";
// import {
//   getCategorywiseProduct,
//   productCategory,
//   searchOperation,
// } from "../../services/crud";
import { useState } from "react";
import { allCategories } from "@/constants/categories";
import Category from "@/components/categories/Category";
import { products } from "@/constants/products";
import ItemCard from "@/components/ItemCard";
// import useCartStore from "../../stores/cartStore";
// import { useNavigate } from "react-router-dom";

function Shopping() {
  console.log(products.products);
  //   const [products, setProducts] = useState<Array<object>>([]);
  //   const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState<any>();
  const [selectedCategory, setCategory] = useState<string>("smartphones");
  //   const [disabled, setDisable] = useState(false);
  //   const addItemToCart = useCartStore((state: any) => state.addItemToCart);
  //   const updateCartQuantity = useCartStore(
  //     (state: any) => state.updateCartQuantity
  //   );
  //   const items = useCartStore((state: any) => state.items);
  //   const orderNumber = useCartStore((state: any) => state.orderNumber);
  //   const generateOrderNumber = useCartStore(
  //     (state: any) => state.generateOrderNumber
  //   );
  //   const naviagte = useNavigate();
  //   const toast = useToast();
  //   const hidden = useBreakpointValue({
  //     base: true,
  //     sm: true,
  //     md: true,
  //     xl: false,
  //   });
  //   const columns = useBreakpointValue({
  //     base: "repeat(1, 1fr)",
  //     md: `repeat(${products?.length >= 3 ? 3 : products?.length}, 1fr)`,
  //     xl: `repeat(${products?.length >= 4 ? 4 : products?.length}, 1fr)`,
  //   });

  //   const itemAddToCart = async (event: any, item: any) => {
  //     event.preventDefault();
  //     const itemExits = items.find((product: any) => product.id === item.id);
  //     if (itemExits) {
  //       const newQuantity = itemExits.quantity + 1;
  //       updateCartQuantity(itemExits.id, newQuantity, orderNumber);
  //     } else {
  //       if (orderNumber === 0) {
  //         const randomNumber =
  //           Math.floor(Math.random() * (400000000 - 100000000 + 1)) + 100000000;
  //         generateOrderNumber(randomNumber);
  //         const itemToBeAdded = {
  //           ...item,
  //           quantity: 1,
  //           orderNumber: randomNumber,
  //         };
  //         addItemToCart(itemToBeAdded);
  //       } else {
  //         const itemToBeAdded = {
  //           ...item,
  //           quantity: 1,
  //           orderNumber: orderNumber,
  //         };
  //         addItemToCart(itemToBeAdded);
  //       }
  //     }
  //     toast({
  //       title: `${item.title} added to cart.`,
  //       status: "success",
  //       duration: 2000,
  //       isClosable: true,
  //     });
  //     setDisable(true);
  //     setTimeout(() => {
  //       setDisable(false);
  //     }, 1000);
  //   };
  //   const productQuery = useQuery(
  //     "products",
  //     () =>
  //       getCategorywiseProduct(
  //         selectedCategory !== "" ? selectedCategory : "smartphones"
  //       ),
  //     {
  //       onSuccess: (responseData) => {
  //         if (
  //           responseData.status === 200 &&
  //           typeof responseData.message === "object"
  //         ) {
  //           if (searchText === "") {
  //             setProducts(responseData.message.products);
  //           }
  //         }
  //       },
  //     }
  //   );

  //   console.log(productQuery.isFetched);
  //   console.log(productQuery.data);

  //   const searchProductsQuery = useQuery(
  //     "search",
  //     () => searchOperation(searchText),
  //     {
  //       onSuccess: (responseData) => {
  //         if (
  //           responseData.status === 200 &&
  //           typeof responseData.message === "object"
  //         ) {
  //           if (searchText !== "") {
  //             setProducts(responseData.message.products);
  //           }
  //         }
  //       },
  //     }
  //   );

  //   const categoryQuery = useQuery("categories", productCategory, {
  //     onSuccess: (responseData) => {
  //       if (responseData.status === 200) {
  //         setCategories(responseData.message);
  //       }
  //     },
  //   });

  const selectCategory = async (event: any, category: string) => {
    event.preventDefault();
    await updateCategory(category);
    // productQuery.refetch();
  };

  const updateCategory = async (category: string) => {
    setCategory(category);
    // setSearchText("");
  };

  const searchFunction = async (event: any) => {
    event.preventDefault();
    setCategory("");
    // searchProductsQuery.refetch();
  };

  return (
    <Flex
      direction={"row"}
      minHeight={"100%"}
      width={"100%"}
      justifyContent={"end"}
    >
      <Box display={"flex"} left={0} position={"fixed"} width={"20%"}>
        <Category />
      </Box>
      <Box flexDirection={"column"} overflowY={"scroll"} width={"80%"}>
        <Flex
          direction={"row"}
          width={"100%"}
          gap={{ base: 6, md: 0 }}
          align={"center"}
          justifyContent={"space-between"}
          px={28}
        >
          Test
          {/* <form onSubmit={(event) => searchFunction(event)}>
              <InputGroup
                width={{ base: 200, md: 400 }}
                borderColor={"#ffd5e5"}
                _hover={{
                  borderColor: "#ffd5e5",
                }}
                _active={{
                  borderColor: "#ffd5e5",
                }}
              >
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  placeholder="Search products"
                  _active={{
                    borderColor: "#ffd5e5",
                  }}
                  value={searchText}
                  _hover={{
                    borderColor: "#ffd5e5",
                  }}
                  onChange={(event) => setSearchText(event.target.value)}
                />
              </InputGroup>
            </form> */}
          <Button
            bgColor={"inherit"}
            textColor={"brand.900"}
            _hover={{
              backgroundColor: "brand.300",
            }}
            fontSize={"lg"}
            fontWeight={"bold"}
            display={"flex"}
            flexDirection={"row"}
            //   onClick={() => naviagte("/cart")}
          >
            <BiCart />
            <u>Carts</u>
          </Button>
        </Flex>
        {/* {(!productQuery.isFetchedAfterMount ||
            !searchProductsQuery.isFetchedAfterMount) && (
            <Flex
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
              align={"center"}
              gap={2}
            >
              <Spinner size={"lg"} color="brand.700" />
              <Text fontWeight={"bold"} textColor={"brand.800"}>
                Loading...
              </Text>
            </Flex>
          )} */}
        {products && (
          <Flex my={4} width={"100%"} justifyContent={"center"}>
            <SimpleGrid
              columns={4}
              gap={6}
              width={"fit-content"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              {products.products?.map((items: any, index: number) => (
                <ItemCard
                  title={items.title}
                  price={items.price}
                  thumbnail={items.thumbnail}
                  addToCart={(event: any) => {}}
                  disabled={false}
                  key={index}
                />
              ))}
            </SimpleGrid>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}

export default Shopping;
