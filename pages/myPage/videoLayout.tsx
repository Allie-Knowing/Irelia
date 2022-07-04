import { ToggleButton, VideoLayout } from "@views/myPage";
import styled from "@emotion/styled";

const VideoLayoutContainer = () => (
  <Container>
    <ToggleButton
      buttons={[
        { name: "question-list", onActive: () => {}, text: "나의 질문" },
        { name: "answer-list", onActive: () => {}, text: "나의 답변" },
      ]}
      initalName="question-list"
    />
    <VideoLayout />
  </Container>
);

export default VideoLayoutContainer;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;