import {
  Box,
  Button,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { IFeedback } from "../../context/FeedbackContext";
import { api } from "../../services/api";

function Feedback() {
  const router = useRouter();
  const toast = useToast();

  const [feedback, setFeedback] = useState({
    pessoa: "",
    feedback: "",
    feedbackType: "",
  } as IFeedback);

  const postFeedback = async () => {
    if (
      feedback.pessoa === "" ||
      feedback.feedback === "" ||
      feedback.feedbackType === ""
    ) {
      toast({
        title: "Error",
        description: "Fill all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    try {
      await api.post("/", feedback);
      toast({
        title: "Success",
        description: "Feedback created",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      router.push("/");
    } catch (err) {
      toast({
        title: "Error",
        description: "Error to create feedback",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      mt={4}
      w="100%"
      bg={"gray.50"}
      h="100%"
      borderRadius={4}
      p={6}
      boxShadow="lg"
      overflow="hidden"
    >
      <Box
        display="flex"
        flexDirection="column"
        maxW="700px"
        p={6}
        ml={["0", "20"]}
        mr={["0", "20"]}
      >
        <Text fontSize={{ base: "sm", md: "lg" }}>
          Who do you want to send the feedback
        </Text>
        <Input
          mt={5}
          type={"text"}
          placeholder={"Name of who do you whant to send the feedback"}
          onChange={(e) => setFeedback({ ...feedback, pessoa: e.target.value })}
        />

        <Text fontSize={{ base: "sm", md: "lg" }} mt={10}>
          Feedback Type
        </Text>
        <Select
          mt={5}
          placeholder="Positive or Negative"
          onChange={(e) =>
            setFeedback({ ...feedback, feedbackType: e.target.value })
          }
        >
          <option style={{ color: "white" }} value="Positive">
            Positive
          </option>
          <option style={{ color: "white" }} value="Negative">
            Negative
          </option>
        </Select>

        <Text fontSize={{ base: "sm", md: "lg" }} mt={10}>
          Description
        </Text>
        <Textarea
          bg={"gray.50"}
          mt={5}
          border="1px solid #9699B0"
          onChange={(e) =>
            setFeedback({ ...feedback, feedback: e.target.value })
          }
        />

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="Space-between"
          mt={10}
        >
          <Button
            w="35%"
            h="40px"
            bg={"gray.300"}
            fontWeight="light"
            borderRadius="none"
            _hover={{ bg: "gray.400" }}
            onClick={() => router.push("/")}
          >
            Cancel
          </Button>
          <Button
            w="35%"
            h="40px"
            bg={"blue.600"}
            fontWeight="light"
            borderRadius="none"
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => postFeedback()}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Feedback;
