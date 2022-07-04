import { FC } from "react";
import { UserInfo } from "@views/myPage";
import styled from "@emotion/styled";

const UserInfoContainer: FC = () => (
  <Container>
    <UserInfo />
  </Container>
);

export default UserInfoContainer;

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
