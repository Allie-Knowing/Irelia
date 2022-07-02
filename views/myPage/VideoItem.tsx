import { FC } from "react";
import styled from "@emotion/styled";
import { ForTest } from "@images";

const Container = styled.section`
  width: calc(100% / 2.1);
  height: 60%;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoItem: FC = () => (
  <Container>
    <Thumbnail src={ForTest.src} alt="thumbnail" />
  </Container>
);

export default VideoItem;
