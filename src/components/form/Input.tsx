import { FieldValues, Path, UseFormRegister, useForm } from "react-hook-form";
import FormWrapper from "./FormWrapper";
import {
  Input as ChakraUiInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { colors } from "@/themes/colors";

export function Input<TFieldValues extends FieldValues>({
  leftElement,
  rightElement,
  label,
  placeholder,
  hidden,
  name,
  type,
  showPassword,
  register,
}: InputProps<TFieldValues>) {
  return (
    <FormWrapper name={name} label={label}>
      <InputGroup
        size="md"
        backgroundColor={"white"}
        display={"flex"}
        width={{ base: 220, md: 350 }}
      >
        {leftElement && (
          <InputLeftElement
            width={{ base: "2rem", md: "4.5rem" }}
            alignSelf={"center"}
          >
            {leftElement}
          </InputLeftElement>
        )}
        <ChakraUiInput
          _placeholder={{
            color: colors.brand[700],
            fontSize: "sm",
          }}
          _focusVisible={{
            borderColor: colors.brand[600],
          }}
          _hover={{
            borderColor: colors.brand[600],
          }}
          fontSize={"sm"}
          autoComplete="off"
          color={colors.brand[800]}
          width={{ base: 220, md: 350 }}
          placeholder={placeholder}
          bgColor={colors.white}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          hidden={hidden}
          shadow={"md"}
          borderColor={colors.brand[600]}
          {...register(name as Path<TFieldValues>, {
            required: "Task name cannot be empty",
          })}
        />
        {rightElement && (
          <InputRightElement
            width={{ base: "2rem", md: "4.5rem" }}
            alignSelf={"center"}
          >
            {rightElement}
          </InputRightElement>
        )}
      </InputGroup>
    </FormWrapper>
  );
}

export interface InputProps<TFieldValues extends FieldValues> {
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  label: string;
  type: string;
  hidden: boolean;
  placeholder: string;
  name: string;
  showPassword?: boolean;
  register: UseFormRegister<TFieldValues>;
}
