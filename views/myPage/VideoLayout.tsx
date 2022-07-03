import { FC } from "react";
import styled from "@emotion/styled";
import { VideoItem } from "@views/myPage";

const VideoLayout: FC = () => {
  const a = 1;

  return (
    <Container>
      <Text>
        내가 올린 질문 {a}개
      </Text>
      <VideoContainer>
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </VideoContainer>
    </Container>
  );
};

export default VideoLayout;

const Container = styled.div`
  padding: 0px 20px 20px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grayscale.scale100};
  font: ${({ theme }) => theme.fonts.body3};
`;

const VideoContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;
