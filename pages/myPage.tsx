import { getMyInfo } from "@apis";
import queryKey from "@constants/queryKey";
import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import * as S from "@views";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #f3f2f7;
`;

const MyPageContainer: FC = () => {
  const { data, isLoading, isError } = useQuery([queryKey.myInfo], getMyInfo);

  useEffect(() => {
    console.log(data);
    console.log(isLoading);
    console.log(isError);
  }, [data, isError, isLoading]);

  return (
    <Container>
      <S.UserInfo />
    </Container>
  );
};

export default MyPageContainer;
