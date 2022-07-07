import styled from "@emotion/styled";
import React, { FC } from "react";

const IQHistoryItem: FC = () => (
  <Container>
    <IQDescription>
      <Title>활동점수</Title>
      <IQDate>4월 26일 09:00</IQDate>
    </IQDescription>
    <IQValue>+99 IQ</IQValue>
  </Container>
);

export default IQHistoryItem;

const Container = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IQDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.scale100};
`;

const IQDate = styled.p`
  font: ${({ theme }) => theme.fonts.description2};
  color: ${({ theme }) => theme.colors.grayscale.scale70};
`;

const IQValue = styled.p`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.scale100};
`;
