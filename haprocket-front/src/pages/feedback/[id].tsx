/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface IFeedback {
  pessoa: string;
  feedback: string;
  feedbackType: string;
}

function EditFeedback() {
  const router = useRouter();
  const toast = useToast();

  const { id } = router.query;
  const [feedbackEdit, setFeedbackEdit] = useState({
    pessoa: "",
    feedback: "",
    feedbackType: "",
  } as IFeedback);

  useEffect(() => {
    if (id) {
      api
        .get(`/${id}`)
        .then((response) => {
          setFeedbackEdit({
            pessoa: response.data.pessoa,
            feedback: response.data.feedback,
            feedbackType: response.data.feedbackType,
          });
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: "Error to get feedback",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          router.push("/");
        });
    }
  }, [id]);

  function handleEditFeedback() {
    api
      .patch(`/${id}`, feedbackEdit)
      .then((response) => {
        toast({
          title: "Success",
          description: "Feedback edited",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
          value={feedbackEdit.pessoa}
          onChange={(e) =>
            setFeedbackEdit({ ...feedbackEdit, pessoa: e.target.value })
          }
        />

        <Text fontSize={{ base: "sm", md: "lg" }} mt={10}>
          Feedback Type
        </Text>
        <Select
          mt={5}
          defaultValue={feedbackEdit.feedbackType}
          onChange={(e) => {
            setFeedbackEdit({ ...feedbackEdit, feedbackType: e.target.value });
          }}
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
          value={feedbackEdit.feedback}
          onChange={(e) => {
            setFeedbackEdit({ ...feedbackEdit, feedback: e.target.value });
          }}
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
            onClick={() => handleEditFeedback()}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EditFeedback;
