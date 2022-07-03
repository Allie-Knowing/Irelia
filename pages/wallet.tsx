import styled from "@emotion/styled";
import React, { FC } from "react";
import * as S from "@views/wallet";

const WalletPage: FC = () => (
  <Container>
    <S.WalletHeader />
    <S.WalletCotent />
  </Container>
);

export default WalletPage;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
`;
