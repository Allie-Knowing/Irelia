import { FC } from "react";
import { SetItem } from "@views/setUp";
import styled from "@emotion/styled";

const SetUpContainer: FC = () => {
  const editProfile = () => {};
  const editInterests = () => {};
  const contact = () => {};
  const logout = () => {};
  const withdrawal = () => {};

  const SETTING_MAP = [
    {
      id: 1,
      text: "프로필 수정",
      color: "#000",
      onClickFunction: editProfile,
    },
    {
      id: 2,
      text: "관심분야 수정",
      color: "#000",
      onClickFunction: editInterests,
    },
    {
      id: 3,
      text: "문의하기",
      color: "#000",
      onClickFunction: contact,
    },
    {
      id: 4,
      text: "로그아웃",
      color: "#f85555",
      onClickFunction: logout,
    },
    {
      id: 5,
      text: "회원탈퇴",
      color: "#f85555",
      onClickFunction: withdrawal,
    },
  ];

  return (
    <Container>
      <Outer>
        {SETTING_MAP.map((set) => (
          <SetItem
            key={set.id}
            text={set.text}
            color={set.color}
            onClickFunction={set.onClickFunction}
          />
        ))}
      </Outer>
    </Container>
  );
};

export default SetUpContainer;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f3f2f7;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;
