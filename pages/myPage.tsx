import { FC } from "react";
import * as S from "@views";
import styled from "@emotion/styled";

const MyPageContainer: FC = () => (
  <Container>
    <S.UserInfo />
    <div>
      <S.ToggleButton
        buttons={[
          { name: "question-list", onClick: () => {}, text: "나의 질문" },
          { name: "answer-list", onClick: () => {}, text: "나의 답변" },
        ]}
        initalName="question-list"
      />
      <S.VideoLayout />
    </div>
  </Container>
);

export default MyPageContainer;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
`;
