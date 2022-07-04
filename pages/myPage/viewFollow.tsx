import { FC } from "react";
// import styled from "@emotion/styled";
import { UserItem } from "@views/viewFollow";

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
  ];

  return (
    <div>
      {DUMMY.map((ele) => (
        <UserItem key={ele.id} profile={ele.profile} name={ele.name} />
      ))}
    </div>
  );
};

export default ViewFollowContainer;
