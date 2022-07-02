// import { getMyInfo } from "@apis";
// import queryKey from "@constants/queryKey";
// import { useQuery } from "react-query";
// import { FC, useEffect } from "react";
import { FC } from "react";
import * as S from "@views";
import styled from "@emotion/styled";

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

const MyPageContainer: FC = () => {
  const a = 1;
  console.log(a);

  // const { data, isLoading, isError } = useQuery([queryKey.myInfo], getMyInfo);

  // useEffect(() => {
  //   console.log(data);
  //   console.log(isLoading);
  //   console.log(isError);
  // }, [data, isError, isLoading]);

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
