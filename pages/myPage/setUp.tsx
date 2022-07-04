import { FC } from "react";
import { SetUpItem } from "@views/setUp";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const SetUpContainer: FC = () => {
  const theme = useTheme();

  const editProfile = () => {};
  const editInterests = () => {};
  const contact = () => {};
  const logout = () => {};
  const withdrawal = () => {};

  const SETTING_MAP = [
    {
      id: 1,
      text: "프로필 수정",
      color: theme.colors.grayscale.scale100,
      onClickFunction: editProfile,
    },
    {
      id: 2,
      text: "관심분야 수정",
      color: theme.colors.grayscale.scale100,
      onClickFunction: editInterests,
    },
    {
      id: 3,
      text: "문의하기",
      color: theme.colors.grayscale.scale100,
      onClickFunction: contact,
    },
    {
      id: 4,
      text: "로그아웃",
      color: theme.colors.red.default,
      onClickFunction: logout,
    },
    {
      id: 5,
      text: "회원탈퇴",
      color: theme.colors.red.default,
      onClickFunction: withdrawal,
    },
  ];

  return (
    <Container>
      <Outer>
        {SETTING_MAP.map((set) => (
          <SetUpItem
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
  background-color: ${({ theme }) => theme.colors.background};
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;
