import { FC } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

interface PropsType {
  profile: string;
  name: string;
}

const UserItem: FC<PropsType> = ({ profile, name }) => (
  <Conatainer>
    <ProfileImage src={profile} alt="profile image" width={48} height={48} />
    <Name>{name}</Name>
  </Conatainer>
);

export default UserItem;

const Conatainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayscale.scale10};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 14px;
  margin-left: 20px;
`;
