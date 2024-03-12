import { axiosInstance } from "@/api/axios";
import { APIRoute } from "@/api/routes";
import { Email } from "@/types/user";
import { useMutation } from "react-query";

const emailAvailabilityCheck = async (data: Email) => {
  const response = await axiosInstance.post(APIRoute.emailAvailability, data);
  return response;
};

export const useEmailAvailability = () => {
  return useMutation({
    mutationFn: emailAvailabilityCheck,
  });
};
