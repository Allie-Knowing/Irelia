import { ToggleButton, QuestionVideos, AnswerVideos } from "@views/myPage";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

const VideoLayoutContainer = () => {
  // const { ref, inView } = useInView();
  const [isQuestion, setIsQuestion] = useState<boolean>(true);

  const onQuestion = () => {
    setIsQuestion(true);
  };

  const onAnswer = () => {
    setIsQuestion(false);
  };

  // useEffect(() => {
  //   if (inView) {
  //     questionRes.fetchNextPage();
  //   }
  // }, [inView, questionRes]);

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
