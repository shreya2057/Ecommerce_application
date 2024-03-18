import { colors } from "@/themes/colors";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { FieldErrors } from "react-hook-form";

export default function FormWrapper({
  children,
  label,
  name,
  error,
}: FormWrapperProps) {
  return (
    <FormControl isInvalid={!!error[name]}>
      <FormLabel htmlFor={name} color={colors.brand[800]}>
        {label}
      </FormLabel>
      {children}
      <FormErrorMessage color={colors.brand[700]}>
        {error[name]?.message?.toString()}
      </FormErrorMessage>
    </FormControl>
  );
}

export interface FormWrapperProps {
  children: React.ReactNode;
  label: string;
  name: string;
  error: FieldErrors;
}
