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
import ContentsItem from "./ContentsItem";

const ContentsLayout = () => {
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
      {CONTENTS.map((content) => (
        <ContentsItem
          key={content.name}
          name={content.name}
          img={content.img}
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
