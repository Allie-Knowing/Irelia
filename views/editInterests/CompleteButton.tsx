import styled from "@emotion/styled";
import { FC } from "react";

interface PropsType {
  buttonActive: boolean;
}

const CompleteButton: FC<PropsType> = ({ buttonActive }) => (
  <Container buttonActive={buttonActive} disabled={!buttonActive}>
    <Text>버튼</Text>
  </Container>
);

export default CompleteButton;

const Container = styled.button<{ buttonActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: ${(props) =>
    (props.buttonActive
      ? props.theme.colors.primary.default
      : props.theme.colors.grayscale.scale20)};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  font: ${({ theme }) => theme.fonts.body3};
  margin: 11px 147px;
`;
