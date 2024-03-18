import { axiosInstance } from "@/api/axios";
import { APIRoute } from "@/api/routes";
import ErrorToast from "@/components/toast/ErrorToast";
import { User } from "@/types/user";
import { useToast } from "@chakra-ui/react";
import { useMutation } from "react-query";

const loginUser = async (data: User) => {
  const response = await axiosInstance.post(APIRoute.login, data);
  console.log(response);
  return response;
};

export const useLogin = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: loginUser,
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
