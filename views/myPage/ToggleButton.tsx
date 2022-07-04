import { FC, useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

interface Button {
  text: string;
  name: string;
  onActive: () => void;
}

interface PropsType {
  buttons: Button[];
  initalName: string;
}

const ToggleButton: FC<PropsType> = ({ buttons, initalName }) => {
  const theme = useTheme();
  const [active, setActive] = useState<number>(
    buttons.findIndex((v) => v.name === initalName),
  );
  const itemRefs = useRef<HTMLButtonElement[]>([]);
  const [width, setWidth] = useState<null | number>(null);
  const [height, setHeight] = useState<null | number>(null);
  const [left, setLeft] = useState<null | number>(null);

  const onActiveChange = useCallback(() => {
    const item = itemRefs.current[active];

    if (!item) {
      return;
    }

    const { width: w, height: h } = item.getBoundingClientRect();
    const l = item.offsetLeft;

    setWidth(w);
    setHeight(h);
    setLeft(l);
  }, [active]);

  useEffect(() => {
    onActiveChange();
  }, [onActiveChange]);

  return (
    <Wrapper>
      <Container>
        {width !== null && height !== null && left !== null && (
          <Back style={{ width, height, left }} />
        )}
        {buttons.map((button, idx) => (
          <Toggle
            ref={(r) => {
              if (r) {
                itemRefs.current[idx] = r;
              }
            }}
            onClick={() => {
              setActive(idx);
              button.onActive();
            }}
            style={{
              color:
                active === idx
                  ? theme.colors.grayscale.scale10
                  : theme.colors.grayscale.scale50,
            }}
            key={button.name}
          >
            {button.text}
          </Toggle>
        ))}
      </Container>
    </Wrapper>
  );
};

export default ToggleButton;

const Wrapper = styled.div`
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grayscale.scale20};
  padding: 4px;
  border-radius: 10px;
`;

const Toggle = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4px 0px;
`;

const Back = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.default};
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;
  border-radius: 10px;
`;
