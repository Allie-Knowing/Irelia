import styled from "@emotion/styled";

const VideoItemSkeleton = () => (
  <div>
    <Container />
  </div>
);

export default VideoItemSkeleton;

const Container = styled.div`
  flex: 1;
  aspect-ratio: 75 / 133;
  position: relative;
  background-color: ${({ theme }) => theme.colors.grayscale.scale50};
`;