"use client";
import SuccessMessage from "@/components/messages/Success";
import { useLogin } from "@/services/auth/login";
import { useUserStore } from "@/store/user";
import { User } from "@/types/user";

const title = "Registered Successfully";
const body = " Your account has been created successfully";

export default function RegisterSuccess() {
  const { mutate: login } = useLogin();
  const { user } = useUserStore();
  const loginUser = (data: User) => {
    login(data);
  };
  return (
    <SuccessMessage
      title={title}
      body={body}
      buttonText="Login"
      buttonFunction={() => loginUser(user)}
    />
  );
}
