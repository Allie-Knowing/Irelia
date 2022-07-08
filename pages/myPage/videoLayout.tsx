import { ToggleButton, VideoLayout } from "@views/myPage";
import styled from "@emotion/styled";
import queryKey from "@constants/queryKey";
import { getQuestionVideos } from "@apis/myPage";
import { useInfiniteQuery } from "react-query";

const VideoLayoutContainer = () => {
  const res = useInfiniteQuery([queryKey.myQuestion], getQuestionVideos, {
    getNextPageParam: (lastPage) => lastPage.data.id,
  });

  return (
    <Container>
      <ToggleButton
        buttons={[
          {
            name: "question-list",
            onActive: () => { },
            text: "나의 질문",
          },
          { name: "answer-list", onActive: () => { }, text: "나의 답변" },
        ]}
        initalName="question-list"
      />
      <VideoLayout />
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
