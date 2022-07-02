import { FC, useEffect, useState } from "react";
import { setUpStyle } from "@views";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100vw;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface StateType {
  text: string;
  color: string;
  func: { (): void } | null;
}

const configureNames = [
  "프로필 수정",
  "관심분야 수정",
  "알림 설정",
  "문의하기",
  "로그아웃",
  "회원 탈퇴",
];

const SetUpContainer: FC = () => {
  const [configure, setConfigure] = useState<StateType[]>(
    configureNames.map((name) => ({
      text: name,
      color: "#000000",
      func: null,
    })),
  );

  useEffect(() => {
    setConfigure()
  }, [])

  return (
    <Container>
      <Outer>
        <setUpStyle.SetItem />
        <setUpStyle.SetItem />
        <setUpStyle.SetItem />
      </Outer>
    </Container>
  );
};

export default SetUpContainer;
