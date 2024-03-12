import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

function ItemCard(pt: {
  title: string;
  price: number;
  thumbnail: string;
  addToCart: (event: any) => void;
  disabled: boolean;
}) {
  const title = pt.title.substring(0, 15) + "...";
  return (
    <Card
      width={"min-content"}
      height={"min-content"}
      borderWidth={1}
      borderColor={"#ffd5e5"}
      bgColor={"#fff6f9"}
      shadow={"lg"}
    >
      <CardBody m={0} p={0}>
        <Box
          width={200}
          height={200}
          display={"flex"}
          bgColor={"#f8efe7"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Image objectFit={"fill"} rounded={"md"} src={pt.thumbnail} />
        </Box>
        <Heading size={"sm"} mx={6} mt={3} mb={1} textColor={"#4d2f56"}>
          {title}
        </Heading>
        <Text
          textColor={"#b87c94"}
          fontSize={"md"}
          alignSelf={"center"}
          mx={6}
          mb={1}
        >
          ${pt.price}
        </Text>
      </CardBody>
      <CardFooter display={"flex"} alignContent={"center"} px={6} py={2}>
        <Button
          bgColor={"#f6e4ed"}
          px={4}
          _hover={{ bgColor: "#f8efe7" }}
          textColor={"#b87c94"}
          isDisabled={pt.disabled}
          onClick={(event) => pt.addToCart(event)}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;
