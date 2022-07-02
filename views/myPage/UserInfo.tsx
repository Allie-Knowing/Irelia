import { FC } from "react";
import styled from "@emotion/styled";
import { ForTest } from "@images";

const Container = styled.section`
  width: 100vw;
  height: 14%;
  background-color: #ffffff;
`;

const Outer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 6%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6%;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2%;
`;

const Follow = styled.p`
  font-size: 14px;
  color: #97979c;
`;

const Name = styled.p`
  font-size: 16px;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  /* width: 18%;
  height: 73%; */
  width: 65px;
  height: 65px;
  object-fit: cover;
`;

const UserInfo: FC = () => (
  <Container>
    <Outer>
      <ProfileImage src={ForTest.src} alt="profile image" />
      <Inner>
        <Name>name</Name>
        <FollowContainer>
          <Follow>팔로워</Follow>
          <Follow>0</Follow>
          <Follow>팔로잉</Follow>
          <Follow>0</Follow>
        </FollowContainer>
      </Inner>
    </Outer>
  </Container>
);

export default UserInfo;
