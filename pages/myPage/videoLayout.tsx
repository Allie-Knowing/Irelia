import { ToggleButton, QuestionVideos, AnswerVideos } from "@views/myPage";
import styled from "@emotion/styled";
import { useState } from "react";

const VideoLayoutContainer = () => {
  const [isQuestion, setIsQuestion] = useState<boolean>(true);

  const onQuestion = () => {
    setIsQuestion(true);
  };

  const onAnswer = () => {
    setIsQuestion(false);
  };

  return (
    <Container>
      <ToggleButton
        buttons={[
          {
            name: "question-list",
            onActive: () => {
              onQuestion();
            },
            text: "나의 질문",
          },
          {
            name: "answer-list",
            onActive: () => {
              onAnswer();
            },
            text: "나의 답변",
          },
        ]}
        initalName="question-list"
      />
      {isQuestion ? <QuestionVideos /> : <AnswerVideos />}
    </Container>
  );
};

export default VideoLayoutContainer;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
