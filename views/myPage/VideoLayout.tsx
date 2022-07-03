import { FC } from "react";
import styled from "@emotion/styled";
import { VideoItem } from "@views/myPage";

const Container = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2.5%;
`;

const Outer = styled.div`
  width: 90%;
`;

const Text = styled.p`
  font-size: 14px;
  color: #17171c;
`;

const VideoContainer = styled.div`
  margin-top: 2.5%;
  display: flex;
  column-gap: 3%;
  row-gap: 3%;
  flex-flow: row wrap;
  height: 56%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const VideoLayout: FC = () => {
  const a = 1;

  return (
    <Container>
      <Outer>
        <Text>내가 올린 질문 {a}개</Text>
        <VideoContainer>
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </VideoContainer>
      </Outer>
    </Container>
  );
};

export default VideoLayout;
