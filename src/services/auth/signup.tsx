"use client";
import { axiosInstance } from "@/api/axios";
import { APIRoute } from "@/api/routes";
import ErrorToast from "@/components/toast/ErrorToast";
import { useUserStore } from "@/store/user";
import { User } from "@/types/user";
import { useToast } from "@chakra-ui/react";
import Router, { useRouter } from "next/navigation";
import { useMutation } from "react-query";

const createAccount = async (data: User) => {
  const response = await axiosInstance.post(APIRoute.signup, data);
  return response;
};

export const useCreateAccount = () => {
  const toast = useToast();
  const router = useRouter();
  const { registeredUserDetails } = useUserStore();
  return useMutation({
    mutationFn: createAccount,
    onSuccess: (response, variable) => {
      if (response.status === 201) {
        registeredUserDetails(variable);
        router.push("/register_success");
      }
    },
    onError: () => {
      toast({
        duration: 4000,
        isClosable: true,
        position: "bottom-right",
        render: () => <ErrorToast title={"An error encountered"} />,
      });
    },
  });
};
