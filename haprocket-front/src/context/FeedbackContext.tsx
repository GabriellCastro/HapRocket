import { createContext, FC, useState } from "react";

interface IFeedbackContext {
  feedbacks: IFeedback[];
  setFeedbacks: (feedbacks: IFeedback[]) => void;
  setSelectedType: (feedback: string) => void;
  filteredFeedback: IFeedback[];
  selectedType: string;
}

interface IFeedbackProvider {
  children: React.ReactNode;
}

export interface IFeedback {
  id: number;
  pessoa: string;
  feedback: string;
  feedbackType: string;
  updatedAt: string;
}

export const FeedbackContext = createContext({} as IFeedbackContext);

export const FeedbackProvider: FC<IFeedbackProvider> = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([] as IFeedback[]);
  const [selectedType, setSelectedType] = useState("All");

  const filteredFeedback = feedbacks.filter((feedback) => {
    if (selectedType === "All") {
      return feedback;
    }
    return feedback.feedbackType === selectedType;
  });

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        setFeedbacks,
        filteredFeedback,
        setSelectedType,
        selectedType,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
