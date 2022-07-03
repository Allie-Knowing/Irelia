import styled from "@emotion/styled";
import React, { FC } from "react";

interface ModalButtonType {
  title: string;
  margin: string;
}

const ModalOpenButton: FC<ModalButtonType> = ({ title, margin }) => (
  <Container margin={margin}>{title}</Container>
);

export default ModalOpenButton;

const Container = styled.button<{ margin: string }>`
  border: 1px solid #fff;
  border-radius: 4px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  font: ${({ theme }) => theme.fonts.description1};
  padding: 4px 8px;
  margin: ${({ margin }) => margin};
`;
