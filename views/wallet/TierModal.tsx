import { logoIcon } from "@assets/icons";
import { TIER_CATEGORIES } from "@constants/tierCategory";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { FC } from "react";

const TierModal: FC = () => (
  <GrayScreen>
    <Container>
      <TierHeader>
        <Image src={logoIcon} alt="logo" />
        <TierFont>오미크론</TierFont>
        <TierDescription>시그마까지 1234 IQ 남았습니다.</TierDescription>
      </TierHeader>
      <TierContent>
        <TierBarContainer>
          <TierBar>
            <TierBarContent />
          </TierBar>
          <TierBarFontContainer>
            <TIerBarFont>뮤</TIerBarFont>
            <TIerBarFont>오미크론</TIerBarFont>
          </TierBarFontContainer>
        </TierBarContainer>
        <TierTable>
          {TIER_CATEGORIES.map((v, i) => (
            <TableLine key={i}>
              <TableContent isBold={v.tier === "티어"}>{v.tier}</TableContent>
              <TableContent isBold={v.tier === "티어"}>
                {v.selection}
              </TableContent>
              <TableContent isBold={v.tier === "티어"}>{v.iq}</TableContent>
            </TableLine>
          ))}
        </TierTable>
      </TierContent>
    </Container>
  </GrayScreen>
);

export default TierModal;

const GrayScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(196, 196, 196, 0.8);
  top: 0;
  left: 0;
  z-index: 1;
`;

const Container = styled.div`
  width: 320px;
  height: 425px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  background-color: white;
`;

const TierHeader = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.default};
  padding: 15px 20px;
`;

const TierFont = styled.p`
  font: ${({ theme }) => theme.fonts.body3};
  color: ${({ theme }) => theme.colors.grayscale.scale10};
  margin-top: 10px;
`;

const TierDescription = styled.p`
  font: ${({ theme }) => theme.fonts.description2};
  color: ${({ theme }) => theme.colors.grayscale.scale30};
`;

const TierContent = styled.div`
  padding: 0px 10px;
  margin-top: 16px;
`;

const TierBarContainer = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #bbbcc4;
`;

const TierBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grayscale.scale30};
`;

const TierBarContent = styled.div`
  width: 70%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary.default};
`;

const TierBarFontContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0px 5px;
  margin-top: 5px;
`;

const TIerBarFont = styled.p`
  display: inline;
  font:${({ theme }) => theme.fonts.description2}
  color: ${({ theme }) => theme.colors.grayscale.scale100};
`;

const TierTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const TableLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 0px;
`;

const TableContent = styled.p<{ isBold: boolean }>`
  width: 25%;
  padding: 0px 5px;
  padding-left: 3px;
  font-size: 10px;
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  display: inline;
`;
