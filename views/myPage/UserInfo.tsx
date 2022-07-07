import { FC } from "react";
import styled from "@emotion/styled";
import ImageWithDefault from "@components/ImageWithDefault";

const UserInfo: FC = () => (
  <Container>
    <Outer>
      <ProfileImage src="/a.png" width={65} height={65} />
      <Inner>
        <Name>name</Name>
        <FollowContainer>
          <Follow>팔로워 0</Follow>
          <Follow>팔로잉 0</Follow>
        </FollowContainer>
      </Inner>
    </Outer>
  </Container>
);

export default UserInfo;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  padding: 16px 20px;
`;

const Outer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;

const Follow = styled.p`
  font-size: 14px;
  color: #97979c;
`;

const Name = styled.p`
  font-size: 16px;
`;

const ProfileImage = styled(ImageWithDefault)`
  border-radius: 50%;
  object-fit: cover;
`;
