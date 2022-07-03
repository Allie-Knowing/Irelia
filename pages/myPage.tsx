import { FC } from "react";
import * as S from "@views";
import styled from "@emotion/styled";

const MyPageContainer: FC = () => {
  const a = 1;
  console.log(a);

  return (
    <Container>
      <S.UserInfo />
      <Outer>
        <S.ToggleButton />
        <S.VideoLayout />
      </Outer>
    </Container>
  );
};

export default MyPageContainer;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f3f2f7;
  overflow-y: hidden;
`;

const Outer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;
