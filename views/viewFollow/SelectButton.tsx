import { FC, useState } from "react";
import styled from "@emotion/styled";

interface Button {
  text: string;
  name: string;
  onActive: () => void;
}

interface PropsType {
  buttons: Button[];
  initalName: string;
}

const SelectButton: FC<PropsType> = ({ buttons, initalName }) => {
  const [active, setActive] = useState<string>(initalName);

  const onClickHandler = (button: Button) => {
    setActive(button.name);
    button.onActive();
  };

  return (
    <Container>
      {buttons.map((button) => (
        <Select
          key={button.name}
          onClick={() => onClickHandler(button)}
          className={active === button.name ? "active" : "nonActive"}
        >
          {button.text}
        </Select>
      ))}
    </Container>
  );
};

export default SelectButton;

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  box-sizing: border-box;

  & .active {
    color: ${({ theme }) => theme.colors.grayscale.scale100};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary.default};
  }

  & .nonActive {
    color: ${({ theme }) => theme.colors.grayscale.scale50};
  }
`;

const Select = styled.button`
  flex: 1;
  padding: 12px;
  font-size: 16px;
`;
