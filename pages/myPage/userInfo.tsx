import { UserInfo } from "@views/myPage";
import styled from "@emotion/styled";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "react-query";
import queryKey from "@constants/queryKey";
import { getMyInfo } from "@apis/myPage";

const UserInfoContainer = () => (
  <Container>
    <UserInfo />
  </Container>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKey.myInfo], getMyInfo);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default UserInfoContainer;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
