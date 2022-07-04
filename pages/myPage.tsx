import { FC } from "react";
import { ToggleButton, UserInfo, VideoLayout } from "@views/myPage";
import styled from "@emotion/styled";

const MyPageContainer: FC = () => (
  <Container>
    <UserInfo />
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

export default MyPageContainer;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
`;
