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
import { useState } from "react";
import ContentsItem from "./ContentsItem";

const ContentsLayout = () => {
  const [selectCount, setSelectCount] = useState<number>(0);
  const [selectArr, setSelectArr] = useState<boolean[]>(Array(9).fill(false));

  const onClick = (index: number) => {
    if (selectCount >= 3 && !selectArr[index]) {
      return;
    }

    if (selectArr[index]) {
      setSelectCount(selectCount - 1);
    }

    if (!selectArr[index]) {
      setSelectCount(selectCount + 1);
    }

    setSelectArr(selectArr.map((v, i) => (i === index ? !v : v)));
  };

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

  return (
    <Container>
      {CONTENTS.map((content, idx) => (
        <ContentsItem
          key={content.name}
          name={content.name}
          img={content.img}
          index={idx}
          isSelect={selectArr[idx]}
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
