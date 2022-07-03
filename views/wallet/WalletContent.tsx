import styled from "@emotion/styled";
import React, { FC } from "react";
import { ModalOpenButton, CurrentWalletInfo } from "@views/wallet";

interface ModalButtonType {
  title: string;
  margin: string;
}

const WalletInfo: FC = () => {
  const MODAL_BUTTON_ARRAY: ModalButtonType[] = [
    { title: "현금교환", margin: "0px" },
    { title: "등급보기", margin: "0px 0px 0px 5px" },
  ];

  return (
    <Container>
      <TierContainer>
        <CurrentTier>티어</CurrentTier>
        <ModalButtonContainer>
          {MODAL_BUTTON_ARRAY.map((v, i: number) => (
            <ModalOpenButton {...v} key={i} />
          ))}
        </ModalButtonContainer>
      </TierContainer>
      <AccumulateInfoContainer>
        <AccumulateInfo>
          <AccumulateTitle>누적 IQ</AccumulateTitle>
          <AccumulateValue>999999 IQ</AccumulateValue>
        </AccumulateInfo>
        <AccumulateInfo>
          <AccumulateTitle>채택 수</AccumulateTitle>
          <AccumulateValue>9999</AccumulateValue>
        </AccumulateInfo>
      </AccumulateInfoContainer>
      <CurrentWalletInfo />
    </Container>
  );
};

export default WalletInfo;

const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.default};
  position: relative;
  padding: 0px 20px 60px 20px;
`;

const TierContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CurrentTier = styled.p`
  font: ${({ theme }) => theme.fonts.subtitle1};
  color: ${({ theme }) => theme.colors.grayscale.scale10};
`;

const ModalButtonContainer = styled.div``;

const AccumulateInfoContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`;

const AccumulateInfo = styled.div`
  width: 50%;
`;

const AccumulateTitle = styled.p`
  font: ${({ theme }) => theme.fonts.description1};
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  margin-bottom: 5px;
`;

export const AccumulateValue = styled.p`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.scale10};
`;
