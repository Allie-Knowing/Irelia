import styled from "@emotion/styled";

const UserItemSkeleton = () => (
  <Container>
    {Array(5)
      .fill(0)
      .map((_, idx) => (
        <UserItemConatainer key={idx}>
          <ProfileImage />
          <Name>ㅇㅇㅇㅇㅇㅇㅇㅇㅇ</Name>
        </UserItemConatainer>
      ))}
  </Container>
);

export default UserItemSkeleton;

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const UserItemConatainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grayscale.scale50};
  width: 48px;
  height: 48px;
`;

const Name = styled.p`
  font-size: 14px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.colors.grayscale.scale50};
  color: ${({ theme }) => theme.colors.grayscale.scale50};
`;
