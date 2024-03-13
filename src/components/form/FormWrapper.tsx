import { colors } from "@/themes/colors";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

export default function FormWrapper({
  children,
  label,
  name,
}: FormWrapperProps) {
  return (
    <FormControl
    // isInvalid={!!errors.name}
    >
      <FormLabel htmlFor={name} color={colors.brand[800]}>
        {label}
      </FormLabel>
      {children}
      <FormErrorMessage>{/* {errors.name?.message} */}</FormErrorMessage>
    </FormControl>
  );
}

export interface FormWrapperProps {
  children: React.ReactNode;
  label: string;
  name: string;
}
