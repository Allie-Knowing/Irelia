import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";

interface PropsType {
  name: string;
  img: any;
}

const ContentsItem: FC<PropsType> = ({ name, img }) => (
  <Container>
    <Name>{name}</Name>
    <Item src={img} alt="interests image" layout="fill" />
  </Container>
);

export default ContentsItem;

const Container = styled.div`
  flex: 1;
  position: relative;
  aspect-ratio: 4 / 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled(Image)`
  object-fit: cover;
  border-radius: 8px;
  position: relative;
  z-index: 1;
`;

const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  position: relative;
  z-index: 2;
`;
