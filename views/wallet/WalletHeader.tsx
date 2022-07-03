import styled from "@emotion/styled";
import Image from "next/image";
import React, { FC } from "react";
import { logoIcon } from "@icons";

const WalletHeader: FC = () => (
  <Container>
    <Image src={logoIcon} alt="logo" />
    <HeaderTitleFont>지갑</HeaderTitleFont>
  </Container>
);

export default WalletHeader;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 20px;
  background-color: ${({ theme }) => theme.colors.primary.default};
`;

const HeaderTitleFont = styled.p`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  margin-left: 10px;
`;
