import { Box, Button, Icon, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FeedbackContext } from "../context/FeedbackContext";
import { api } from "../services/api";

interface VerticalOptionsProps {
  id: number;
}

export function VerticalOptions({ id }: VerticalOptionsProps) {
  const { feedbacks, setFeedbacks } = useContext(FeedbackContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const onClose = () => setIsOpen(!isOpen);

  const handleDelete = async () => {
    try {
      await api.delete(`/${id}`);
      feedbacks.splice(
        feedbacks.findIndex((feedback) => feedback.id === id),
        1
      );
      setFeedbacks([...feedbacks]);
      toast({
        title: "Success",
        description: "Feedback deleted",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Error to delete feedback",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const viewDetails = () => {
    router.push(`/feedback/${id}`);
  };

  return (
    <Box position="relative">
      <Icon
        as={BsThreeDotsVertical}
        w={6}
        h={6}
        _hover={{
          color: "blue.500",
        }}
        cursor="pointer"
        onClick={onClose}
      />
      {isOpen && (
        <div
          style={{
            zIndex: 100,
            position: "absolute",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
          }}
        >
          <Button
            _hover={{
              bg: "blue.500",
              color: "white",
            }}
            bg="white"
            onClick={() => viewDetails()}
          >
            View
          </Button>
          <Button
            _hover={{
              bg: "red",
              color: "white",
            }}
            bg="white"
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </div>
      )}
    </Box>
  );
}
