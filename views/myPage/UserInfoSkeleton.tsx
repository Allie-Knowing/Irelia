import styled from "@emotion/styled";

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

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.grayscale.scale40};
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const Follow = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayscale.scale20};
  background-color: ${({ theme }) => theme.colors.grayscale.scale20};
`;

const Name = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayscale.scale20};
  background-color: ${({ theme }) => theme.colors.grayscale.scale20};
  margin-bottom: 3px;
`;

const UserInfoSkeleton = () => (
  <Container>
    <Outer>
      <ProfileImage />
      <Inner>
        <Name>ㅇㅇㅇ</Name>
        <FollowContainer>
          <Follow>ㅇㅇㅇ 0</Follow>
          <Follow>ㅇㅇㅇ 0</Follow>
        </FollowContainer>
      </Inner>
    </Outer>
  </Container>
);

export default UserInfoSkeleton;
