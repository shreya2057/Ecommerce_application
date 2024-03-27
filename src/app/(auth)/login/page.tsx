"use client";
import { Input } from "@/components/form/Input";
import { colors } from "@/themes/colors";
import { User } from "@/types/user";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Background from "../../../assets/backgrounds/auth.jpg";
import { useLogin } from "@/services/auth/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "@/schema/user";
import Link from "next/link";
export default function Login() {
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    avatar: "",
  };
  const [showPassword, setshowPassword] = useState(false);
  const passwordVisibility = () => setshowPassword(!showPassword);
  const { mutate: login, status } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: User) => {
    login({ email: data.email, password: data.password });
  };
  return (
    <Flex direction={"row"} minHeight={"100%"} maxH={"100dvh"} width={"100%"}>
      <Flex direction={"column"} flex={1} height={"100%"} gap={4}>
        <Flex
          width={"100%"}
          height={"100%"}
          justifyContent={"center"}
          align={"center"}
        >
          <Box
            position={"relative"}
            width={"100%"}
            height={"100%"}
            style={{ position: "relative" }}
          >
            <Image
              src={Background}
              alt="Background image"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", height: "100%" }}
            />
          </Box>
          <Box
            borderWidth={1}
            borderColor={"#ffd5e5"}
            p={10}
            rounded={"md"}
            shadow={"md"}
            backgroundColor={colors.brand[200]}
            position={"absolute"}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={5}>
                <HStack justifyContent={"space-between"}>
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    color={colors.brand[800]}
                  >
                    Login to your account
                  </Text>
                  <Link href={"/signup"}>
                    <Text
                      as={"u"}
                      fontSize={"sm"}
                      fontWeight={"bold"}
                      color={colors.brand[800]}
                    >
                      Signup
                    </Text>
                  </Link>
                </HStack>
                <Input
                  error={errors}
                  hidden={false}
                  type={"text"}
                  name={"email"}
                  label={"Email"}
                  register={register}
                  placeholder={"Enter your email"}
                />
                <Input
                  error={errors}
                  name={"password"}
                  label={"Password"}
                  hidden={false}
                  type={"password"}
                  register={register}
                  placeholder={"Enter your password"}
                  showPassword={showPassword}
                  rightElement={
                    <IconButton
                      variant={"transparentButton"}
                      width={{ base: "1rem", md: "4.5rem" }}
                      h={{ base: "0.75rem", md: "1.75rem" }}
                      size="sm"
                      aria-label="Password"
                      icon={showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      onClick={passwordVisibility}
                    />
                  }
                />
                <Center>
                  <Box>
                    <Button
                      variant={"primaryButtonShadow"}
                      type="submit"
                      isDisabled={status === "loading" ? true : false}
                    >
                      Login
                    </Button>
                  </Box>
                </Center>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

interface Test {
  email: string;
  password: string;
}
