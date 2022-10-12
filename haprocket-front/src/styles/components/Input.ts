import { ComponentStyleConfig } from "@chakra-ui/react";

export const Input: ComponentStyleConfig = {
  defaultProps: { variant: "default" },
  variants: {
    default: {
      field: {
        fontSize: "1rem",
        fontWeight: "regular",
        height: "45px",
        color: "black",
        borderRadius: "2x",
        bg: "transparent",
        border: "1px solid",
        borderColor: "gray.300",
        _focus: {
          borderColor: "blue.600",
        },
        _placeholder: {
          color: "gray.400",
          fontSize: "1rem",
          fontWeight: "regular",
        },
      },
    },
  },
};