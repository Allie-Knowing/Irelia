import styled from "@emotion/styled";
import {
  Animal,
  Beauty,
  Consulting,
  Cook,
  Fashion,
  Game,
  Health,
  Music,
  Sports,
} from "@assets/images";
import React, { FC, useEffect, useState } from "react";
import { ContentsItem } from "@views/editInterests";

const CONTENTS = [
  {
    name: "패션",
    img: Fashion,
  },
  {
    name: "헬스",
    img: Health,
  },
  {
    name: "동물",
    img: Animal,
  },
  {
    name: "뷰티",
    img: Beauty,
  },
  {
    name: "요리",
    img: Cook,
  },
  {
    name: "상담",
    img: Consulting,
  },
  {
    name: "게임",
    img: Game,
  },
  {
    name: "스포츠",
    img: Sports,
  },
  {
    name: "음악",
    img: Music,
  },
];

interface PropsType {
  setButtonActive: React.Dispatch<React.SetStateAction<boolean>>
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
