import { FC, useEffect } from "react";
import styled from "@emotion/styled";

const Text = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 16px;
`;

interface PropsType {
  text: string;
  func: () => void;
  color: string;
}

const SetItem: FC<PropsType> = ({ text, func, color }) => {
  useEffect(() => {
    if (func) {
      func();
    }
  }, [func]);

  return (
    <div>
      <Text color={color}>{text}</Text>
    </div>
  );
};

export default SetItem;
