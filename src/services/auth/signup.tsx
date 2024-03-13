import { axiosInstance } from "@/api/axios";
import { APIRoute } from "@/api/routes";
import ErrorToast from "@/components/toast/ErrorToast";
import SuccessToast from "@/components/toast/SuccessToast";
import { colors } from "@/themes/colors";
import { User } from "@/types/user";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

const createAccount = async (data: User) => {
  const response = await axiosInstance.post(APIRoute.signup, data);
  return response;
};

export const useCreateAccount = () => {
  const toast = useToast();
  const router = useRouter();
  return useMutation({
    mutationFn: createAccount,
    onSuccess: () => {
      toast({
        duration: 8000,
        isClosable: true,
        position: "bottom-right",
        render: () => <SuccessToast title={"Account has been created"} />,
      });
      router.push("/login");
    },
    onError: () => {
      toast({
        duration: 8000,
        isClosable: true,
        position: "bottom-right",
        render: () => <ErrorToast title={"An error encountered"} />,
      });
    },
  });
};
