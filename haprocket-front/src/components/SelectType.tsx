import { Flex, Select, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

export function SelectType() {
  const { setSelectedType, selectedType } = useContext(FeedbackContext);

  return (
    <Flex flexDir="row" align="baseline" justify="space-between">
      <Text
        fontSize="md"
        fontWeight="light"
        ml={4}
        mr={1}
        whiteSpace={"nowrap"}
      >
        Filter by:
      </Text>
      <Select
        flex={1}
        w={{ base: "100%", md: "40%" }}
        mt={1}
        size="sm"
        border="none"
        borderBottom={"1px"}
        borderColor="blue.600"
        _hover={{
          borderColor: "blue.500",
        }}
        onChange={(e) => setSelectedType(e.target.value)}
        value={selectedType}
      >
        <option
          style={{
            color: "black",
            backgroundColor: "transparent",
          }}
          value="All"
        >
          All
        </option>
        <option
          style={{
            color: "black",
            backgroundColor: "transparent",
          }}
          value="Negative"
        >
          Negative
        </option>
        <option
          style={{
            color: "black",
            backgroundColor: "transparent",
          }}
          value="Positive"
        >
          Positive
        </option>
      </Select>
    </Flex>
  );
}
