/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { ListFeedbacks } from "../components/ListFeedbacks";
import { SelectType } from "../components/SelectType";
import { FeedbackContext } from "../context/FeedbackContext";
import { api } from "../services/api";

const Home: NextPage = () => {
  const { filteredFeedback, setFeedbacks } = useContext(FeedbackContext);
  const router = useRouter();

  useEffect(() => {
    api
      .get("/")
      .then((response) => setFeedbacks(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Flex flexDir="column">
      <Button
        w={{ base: "100%", md: "30%" }}
        h={50}
        mt={6}
        bg="blue.600"
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
        onClick={() => router.push("/feedback")}
      >
        <Text fontSize={{ base: "sm", md: "md" }}>New Feedback</Text>
      </Button>

      <Flex flexDir="row" align="center" justify="space-between" mt={1}>
        <Divider flex={1} orientation="horizontal" borderColor="black" />
        <SelectType />
      </Flex>

      <Box
        mt={4}
        w="100%"
        bg={"gray.50"}
        h="100%"
        borderRadius={4}
        p={4}
        boxShadow="lg"
      >
        <Flex w={["65%", "55%"]} align={"center"} justify={"space-around"}>
          <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold">
            Who Send
          </Text>
          <Text fontSize={{ base: "sm", md: "lg" }} fontWeight="bold" ml="24">
            Date
          </Text>
        </Flex>

        {filteredFeedback.length > 0 ? (
          filteredFeedback.map((feedback) => (
            <ListFeedbacks
              key={feedback.id}
              id={feedback.id}
              name={feedback.pessoa}
              date={new Date(feedback.updatedAt).toLocaleDateString("pt-BR")}
            />
          ))
        ) : (
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            fontWeight="bold"
            ml="60"
            mt={4}
            color="gray.500"
          >Add new feedback</Text>
        )}
      </Box>
    </Flex>
  );
};

export default Home;
