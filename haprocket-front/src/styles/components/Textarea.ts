import { ComponentStyleConfig } from "@chakra-ui/react";

export const Textarea: ComponentStyleConfig = {
  defaultProps: { variant: "default" },
  variants: {
    default: {
      field: {
        fontSize: "1rem",
        fontWeight: "regular",
        height: "45px",
        color: "gray.400",
        borderRadius: "2x",
        bg: "white",
        border: "2px solid gray.500",
        borderColor: "gray.400",
        _focus: {
          borderColor: "blue.600",
        },
      },
    },
  },
};
