/* eslint-disable react/no-unescaped-entities */
import { Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsHouseDoor } from "react-icons/bs";

export function Header() {
  const router = useRouter();

  return (
    <>
      <Flex flexDirection="row" mt={10} mb={5} align="center">
        <Text fontSize="lg" fontWeight="bold">
          Feedback
        </Text>

        <Icon
          as={BsHouseDoor}
          fontSize="lg"
          ml={4}
          mr={2}
          cursor="pointer"
          onClick={() => router.push("/")}
          color="blue.600"
        />

        <Text fontSize="lg" fontWeight="light" mr={2}>
          {"> "}
        </Text>
        <Text fontSize="md" fontWeight="light" mr={2} color="blue.600">
          Feedbacks
        </Text>

        {router.pathname === "/feedback" && (
          <>
            <Text fontSize="lg" fontWeight="light" mr={2}>
              {"> "}
            </Text>
            <Text fontSize="md" fontWeight="light" mr={2} color="blue.600">
              Feedbacks Details
            </Text>
          </>
        )}
        {router.pathname === "/feedback/[id]" && (
          <>
            <Text fontSize="lg" fontWeight="light" mr={2}>
              {"> "}
            </Text>
            <Text fontSize="md" fontWeight="light" mr={2} color="blue.600">
              Feedbacks Details
            </Text>
          </>
        )}
      </Flex>
      <Text fontSize="lg">
        Here you can send and view the feedbacks that you've received.
      </Text>
    </>
  );
}
