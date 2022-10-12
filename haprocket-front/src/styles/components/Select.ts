import { ComponentStyleConfig } from "@chakra-ui/react";

export const Select: ComponentStyleConfig = {
  defaultProps: { variant: "default" },
  variants: {
    default: {
      field: {
        fontSize: "1rem",
        fontWeight: "regular",
        height: "45px",
        color: "gray.300",
        borderRadius: "2x",
        bg: "transparent",
        border: "1px solid",
        borderColor: "gray.300",
        _focus: {
          borderColor: "blue.600",
        },
      },
    },
  },
};
