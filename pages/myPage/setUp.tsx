import { FC } from "react";
import { SetUpItem } from "@views/setUp";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMutation } from "react-query";
import queryKey from "@constants/queryKey";
import { WithdrawalMember } from "@apis/myPage";

const SetUpContainer: FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const onEditProfile = () => { };
  const onEditInterests = () => {
    router.push("/editInterests");
  };
  const onContact = () => { };
  const onLogout = () => { }; // 토큰 지우고 메인으로.;
  const onWithdrawal = () => {
    const { isLoading, isError } = useMutation(
      [queryKey.withdrawal],
      WithdrawalMember,
    );
    // 모달이 떠야할거같은디?
  };

  return (
    <Container>
      <Outer>
        <SetUpItem
          text="프로필 수정"
          color={theme.colors.grayscale.scale100}
          onClickFunction={onEditProfile}
        />
        <SetUpItem
          text="관심분야 수정"
          color={theme.colors.grayscale.scale100}
          onClickFunction={onEditInterests}
        />
        <Link href="https://knowing.allie.kr/inquiry">
          <a>
            <SetUpItem
              text="문의하기"
              color={theme.colors.grayscale.scale100}
              onClickFunction={onContact}
            />
          </a>
        </Link>
        <SetUpItem
          text="로그아웃"
          color={theme.colors.red.default}
          onClickFunction={onLogout}
        />
        <SetUpItem
          text="회원탈퇴"
          color={theme.colors.red.default}
          onClickFunction={onWithdrawal}
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
