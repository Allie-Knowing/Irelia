import { iqHelpIcon } from "@assets/icons";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { FC } from "react";
import IQHistoryItem from "./IQHistoryItem";

const IQHistory: FC = () => (
  <Container>
    <IQHeader>
      <Title>IQ 내역</Title>
      <Image src={iqHelpIcon} alt="iqHelp" />
    </IQHeader>
    <IQContent>
      {[...new Array(10)].map((_, i: number) => (
        <IQHistoryItem key={i} />
      ))}
    </IQContent>
  </Container>
);

export default IQHistory;

const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
  padding-top: 55px;
`;

const IQHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h2`
  font: ${({ theme }) => theme.fonts.subtitle2};
  color: ${({ theme }) => theme.colors.grayscale.scale100};
  margin-right: 10px;
`;

const IQContent = styled.div`
  width: 100%;
  height: calc(100vh / 2);
  margin-top: 20px;
  overflow-y: scroll;
`;
