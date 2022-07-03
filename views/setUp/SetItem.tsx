import { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  margin-top: 3%;
  width: 100vw;
  height: 8.2%;
  background-color: #ffffff;

  &:active {
    opacity: 0.8;
  }
`;

const Inner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 5.5%;
`;

const Text = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
`;

interface PropsType {
  text: string;
  color: string;
  onClickFunction: () => void;
}

const SetItem: FC<PropsType> = ({ text, color, onClickFunction }) => (
  <Container onClick={onClickFunction}>
    <Inner>
      <Text color={color}>{text}</Text>
    </Inner>
  </Container>
);

export default SetItem;
