import { FC } from "react";
import styled from "@emotion/styled";
import { ForTest } from "@images";

const Container = styled.section`
  width: calc(100% / 2);
`;

const Thumbnail = styled.img``;

const VideoItem: FC = () => (
  <Container>
    <Thumbnail src={ForTest.src} alt="thumbnail" />
  </Container>
);

export default VideoItem;
