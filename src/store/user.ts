import { User } from "@/types/user";
import { create } from "zustand";

interface UserStoreType {
  user: User;
  registeredUserDetails: (data: User) => void;
}

export const useUserStore = create<UserStoreType>((set) => ({
  user: {
    email: "",
    password: "",
  },
  registeredUserDetails: (data: User) => {
    set(() => ({
      user: {
        email: data.email,
        password: data.password,
      },
    }));
  },
}));
