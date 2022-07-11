import { ToggleButton, VideoLayout } from "@views/myPage";
import styled from "@emotion/styled";
import queryKey from "@constants/queryKey";
import { getAnswerVideos, getQuestionVideos } from "@apis/myPage";
import { useInfiniteQuery } from "react-query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const VideoLayoutContainer = () => {
  const { ref, inView } = useInView();
  const [isQuestion, setIsQuestion] = useState<boolean>(true);

  const questionRes = useInfiniteQuery(
    [queryKey.myQuestion],
    getQuestionVideos,
    {
      getNextPageParam: (lastPage) => lastPage.data.id,
      enabled: false,
    },
  );

  const answerRes = useInfiniteQuery([queryKey.myAnswer], getAnswerVideos, {
    getNextPageParam: (lastPage) => lastPage.data.id,
    enabled: false,
  });

  const onQuestion = () => {
    questionRes.refetch();
    setIsQuestion(true);
  };

  const onAnswer = () => {
    answerRes.refetch();
    setIsQuestion(false);
  };

  // useEffect(() => {
  //   if (inView) {
  //     questionRes.fetchNextPage();
  //   }
  // }, [inView, questionRes]);

  useEffect(() => {
    // questionRes.refetch();
    console.log(questionRes.data?.pages[0].data);
    console.log(answerRes.data?.pages[0].data);
  }, [answerRes, questionRes]);

  if (questionRes.isLoading || answerRes.isLoading) {
    return <div>loading...</div>;
  }

  if (questionRes.isError || answerRes.isError) {
    return <div>error...</div>;
  }

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
      <VideoLayout videos={questionRes.data?.pages[0].data} />
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
