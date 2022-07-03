import styled from "@emotion/styled";
import React, { FC } from "react";

const CurrentWalletInfo: FC = () => (
  <Container>
    <CurrentInfo>
      <CurrentInfoTitle>보유 IQ</CurrentInfoTitle>
      <CurrentInfoValue>99999 IQ</CurrentInfoValue>
    </CurrentInfo>
    <Line />
    <CurrentInfo>
      <CurrentInfoTitle>오늘 활동점수</CurrentInfoTitle>
      <CurrentInfoValue>99</CurrentInfoValue>
    </CurrentInfo>
  </Container>
);

export default CurrentWalletInfo;

const Container = styled.div`
  width: calc(100% - 40px);
  height: 74px;
  position: absolute;
  bottom: 0px;
  background-color: ${({ theme }) => theme.colors.grayscale.scale20};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(50%);
  border-radius: 11px;
`;

const CurrentInfo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CurrentInfoTitle = styled.p`
  font: ${({ theme }) => theme.fonts.description1};
  color: ${({ theme }) => theme.colors.grayscale.scale70};
`;

const CurrentInfoValue = styled.p`
  margin-top: 5px;
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grayscale.scale100};
`;

const Line = styled.div`
  width: 1px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.grayscale.scale30};
`;
