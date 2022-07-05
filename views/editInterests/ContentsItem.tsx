import styled from "@emotion/styled";
import theme from "@utils/theme";
import Image from "next/image";
import React, { FC, useEffect } from "react";

interface PropsType {
  name: string;
  img: any;
  index: number;
  isSelect: boolean;
  onClick: (idx: number) => void;
}

const ContentsItem: FC<PropsType> = ({
  name,
  img,
  index,
  isSelect,
  onClick,
}) => (
  <Container onClick={() => onClick(index)} isSelect={isSelect}>
    <Name>{name}</Name>
    <Item src={img} alt="interests image" layout="fill" />
    {isSelect ? <Circle /> : <Donut />}
  </Container>
);

export default ContentsItem;

const Container = styled.div<{ isSelect: boolean }>`
  flex: 1;
  position: relative;
  aspect-ratio: 4 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: ${(props) =>
  (props.isSelect
    ? `4px solid ${props.theme.colors.primary.default}`
    : "none")};
`;

const Item = styled(Image)`
  object-fit: cover;
  position: relative;
  z-index: -1;
`;

const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  position: relative;
  z-index: 2;
`;

const Donut = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: 100px;
  height: 24px;
  width: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: ${({ theme }) => theme.colors.primary.default}
`;