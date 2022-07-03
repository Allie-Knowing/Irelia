import { FC } from "react";
import styled from "@emotion/styled";

interface PropsType {
  text: string;
  color: string;
  onClickFunction: () => void;
}

const SetItem: FC<PropsType> = ({ text, color, onClickFunction }) => (
  <Container onClick={onClickFunction}>
      <Text color={color}>{text}</Text>
  </Container>
);

export default SetItem;

const Container = styled.section`
  margin-top: 10px;
  padding: 16px 20px;
  width: 100vw;
  background-color: #ffffff;

  &:active {
    opacity: 0.8;
  }
`;

const Text = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
`;
