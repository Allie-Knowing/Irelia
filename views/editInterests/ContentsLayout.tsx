import styled from "@emotion/styled";
import React, { FC, useEffect, useState } from "react";
import { ContentsItem } from "@views/editInterests";
import CONTENTS from "@constants/dummies";

interface PropsType {
  setButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContentsLayout: FC<PropsType> = ({ setButtonActive }) => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    if (names.length >= 1) { setButtonActive(true); }
    else { setButtonActive(false); }
  }, [names])

  const onClick = (index: number) => {
    const { name } = CONTENTS[index];

    setNames((prev) => {
      if (prev.find((v) => v === name)) {
        return prev.filter((v) => v !== name);
      }

      if (prev.length < 3) {
        return [...prev, name];
      }

      return prev;
    });
  };

  return (
    <Container>
      {CONTENTS.map((content, idx) => (
        <ContentsItem
          key={content.name}
          name={content.name}
          img={content.img}
          index={idx}
          selectCount={names.findIndex((v) => v === content.name) + 1}
          isSelect={names.includes(content.name)}
          onClick={onClick}
        />
      ))}
    </Container>
  );
};

export default ContentsLayout;

const Container = styled.div`
  margin-top: 23px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 15px;
`;
