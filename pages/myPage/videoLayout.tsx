import { ToggleButton, QuestionVideos, AnswerVideos } from "@views/myPage";
import styled from "@emotion/styled";
import { useState } from "react";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import queryKey from "@constants/queryKey";
import { getMyQuesionList } from "@apis/myPage";

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

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery([queryKey.myQuestion], () =>
    getMyQuesionList());

  const { mutations, _ } = dehydrate(queryClient);

  return {
    props: {
      // dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      dehydratedState: JSON.parse(JSON.stringify(mutations)),
    },
  };
};

export default VideoLayoutContainer;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
