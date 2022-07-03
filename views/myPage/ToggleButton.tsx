import { FC, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ToggleButton: FC = () => {
  const [isQuestion, setIsQuestion] = useState<boolean>(true);
  const [isAnswer, setIsAnswer] = useState<boolean>(false);

  const onQuestion = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setIsQuestion(true);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setIsAnswer(false);
  };

  const onAnswer = () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setIsQuestion(false);
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setIsAnswer(true);
  };

  return (
    <Container>
      <Outer>
        <Toggle onClick={onQuestion}>
          <SelectToggle isQuestion={isQuestion} />
          <Text toggled={isQuestion}>나의 질문</Text>
        </Toggle>
        <Toggle onClick={onAnswer}>
          <Text toggled={isAnswer}>나의 답변</Text>
        </Toggle>
      </Outer>
    </Container>
  );
};

export default ToggleButton;

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
  position: relative;
  padding: 4px;
`;

const Text = styled.p<{ toggled: boolean }>`
  font-size: 16px;
  position: relative;
  z-index: 2;
  transition: color 0.4s;
  ${(props) =>
  (props.toggled
    ? css`
          color: #ffffff;
        `
    : css`
          color: #97979c;
        `)}
`;

const SelectToggle = styled.div<{ isQuestion: boolean }>`
  width: 90%;
  height: 80%;
  background-color: #7366ef;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  z-index: 1;
  transition: transform 0.4s;
  ${(props) =>
    props.isQuestion ||
    css`
      transform: translate(60%, -50%);
    `}
`;
