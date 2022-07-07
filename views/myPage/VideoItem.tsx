import { FC } from "react";
import styled from "@emotion/styled";
import { ForTest } from "@images";
import { playIcon, likeIcon } from "@icons";
import Image from "next/image";

const VideoItem: FC = () => (
  <Container>
    <Thumbnail src={ForTest.src} alt="thumbnail" layout="fill" />
    <VideoNavigation>
      <Outer>
        <Inner>
          <Image src={playIcon} alt="play icon" width={10} height={10} />
          <Text>13만</Text>
        </Inner>
        <Inner>
          <Image src={likeIcon} alt="like icon" width={12} height={10} />
          <Text>123만</Text>
        </Inner>
      </Outer>
    </VideoNavigation>
  </Container>
);

export default VideoItem;

const Container = styled.div`
  flex: 1;
  aspect-ratio: 75 / 133;
  position: relative;
  &:active {
    opacity: 0.8;
  }
  z-index: 1;
`;

const Thumbnail = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;

const VideoNavigation = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 12%;
  background: #17171c;
  opacity: 0.4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Outer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 6%;
  column-gap: 8%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  margin-left: 13%;
  font-size: 10px;
  color: #ffffff;
`;