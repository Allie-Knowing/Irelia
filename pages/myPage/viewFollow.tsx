import { FC } from "react";
import styled from "@emotion/styled";
import { UserItem, SelectButton } from "@views/viewFollow";

const ViewFollowContainer: FC = () => {
  const DUMMY = [
    {
      id: 2,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 2,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 3,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 4,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 5,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 6,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 7,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 8,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 9,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 10,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 11,
      profile: "/a.png",
      name: "찌찌민",
    },
    {
      id: 12,
      profile: "/a.png",
      name: "찌찌민",
    },
  ];

  return (
    <Container>
      <SelectButton
        buttons={[
          { name: "follower-list", onActive: () => {}, text: `팔로워 ${2}` },
          { name: "following-list", onActive: () => {}, text: `팔로잉 ${100}` },
        ]}
        initalName="follower-list"
      />
      <UserItems>
        {DUMMY.map((ele) => (
          <UserItem key={ele.id} profile={ele.profile} name={ele.name} />
        ))}
      </UserItems>
    </Container>
  );
};

export default ViewFollowContainer;

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const UserItems = styled.div`
  flex: 1;
  overflow: scroll;
`;
