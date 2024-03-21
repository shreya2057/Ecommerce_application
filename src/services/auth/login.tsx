import { axiosInstance } from "@/api/axios";
import { APIRoute } from "@/api/routes";
import ErrorToast from "@/components/toast/ErrorToast";
import { User } from "@/types/user";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";
import { TokenService } from "../token";

const loginUser = async (data: User) => {
  const response = await axiosInstance.post(APIRoute.login, data);
  return response;
};

export const useLogin = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: loginUser,
    onSuccess(response) {
      const { accessToken, refreshToken } = response?.data;
      if (!accessToken || !refreshToken) {
        return;
      }
      TokenService.setToken("access_token", accessToken);
      TokenService.setToken("refresh_token", refreshToken);
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
