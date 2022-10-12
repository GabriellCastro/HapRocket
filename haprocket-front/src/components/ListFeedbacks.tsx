import { Flex, Text } from "@chakra-ui/react";
import { VerticalOptions } from "./VerticalOptions";

interface ListFeedbacksProps {
  id: number;
  name: string;
  date: string;
}

export function ListFeedbacks({ name, date, id }: ListFeedbacksProps) {
  return (
    <Flex
      justify={"space-between"}
      mt={4}
      w="100%"
      bg={"gray.50"}
      h="100%"
      p={2}
      borderTop={"1px"}
      align="center"
    >
      <Flex w={["70%", "60%"]} align={"center"} justify={"space-around"}>
        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="medium">
          {name}
        </Text>
        <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="medium"
          ml={["22", "0"]}
        >
          {date}
        </Text>
      </Flex>
      <VerticalOptions id={id} />
    </Flex>
  );
}
