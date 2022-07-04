import { FC } from "react";

interface PropsType {
  profile: string;
  name: string;
}

const UserItem: FC<PropsType> = ({ profile, name }) => (
  <div>
    <div>{profile}</div>
    <div>{name}</div>
  </div>
);

export default UserItem;
