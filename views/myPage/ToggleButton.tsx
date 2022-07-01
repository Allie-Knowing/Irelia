import { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  width: 100vw;
  height: 5.7%;
  display: flex;
  justify-content: center;
`;

const Outer = styled.div`
  width: 90%;
  height: 100%;
  background-color: #eeedf2;
  border-radius: 10px;
`;

const Toggle = styled.button`
  border: none;
  width: 50%;
  height: 100%;
`;

const Text = styled.p`
  font-size: 16px;
  color: #97979c;
`;

const SelectToggle = styled.div`
  background-color: black;
`;

const ToggleButton: FC = () => (
  <Container>
    <Outer>
      <Toggle>
        <SelectToggle />
        <Text>나의 질문</Text>
      </Toggle>
      <Toggle>
        <Text>나의 답변</Text>
      </Toggle>
    </Outer>
  </Container>
);

export default ToggleButton;
