import { axiosInstance } from "@/api/axios";
import { APIRoute } from "@/api/routes";
import { User } from "@/types/user";
import { useMutation } from "react-query";

const createAccount = async (data: User) => {
  const response = await axiosInstance.post(APIRoute.signup, data);
  return response;
};

export const useCreateAccount = () => {
  return useMutation({
    mutationFn: createAccount,
  });
};
