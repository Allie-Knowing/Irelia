import { FC } from "react";
import { SetUpItem } from "@views/setUp";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";

const SetUpContainer: FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const editProfile = () => { };
  const editInterests = () => {
    router.push("/editInterests");
  };
  const contact = () => { };
  const logout = () => { };
  const withdrawal = () => { };

  return (
    <Container>
      <Outer>
        <SetUpItem
          text="프로필 수정"
          color={theme.colors.grayscale.scale100}
          onClickFunction={editProfile}
        />
        <SetUpItem
          text="관심분야 수정"
          color={theme.colors.grayscale.scale100}
          onClickFunction={editInterests}
        />
        <Link href="https://knowing.allie.kr/inquiry">
          <a>
            <SetUpItem
              text="문의하기"
              color={theme.colors.grayscale.scale100}
              onClickFunction={contact}
            />
          </a>
        </Link>
        <SetUpItem
          text="로그아웃"
          color={theme.colors.red.default}
          onClickFunction={logout}
        />
        <SetUpItem
          text="회원탈퇴"
          color={theme.colors.red.default}
          onClickFunction={withdrawal}
        />
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
