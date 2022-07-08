import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { UserItem, SelectButton } from "@views/viewFollow";
import { useQuery } from "react-query";
import queryKey from "@constants/queryKey";
import { getFollowerList, getFollowingList } from "@apis/myPage";

const ViewFollowContainer: FC = () => {
  const res1 = useQuery([queryKey.followerList], getFollowerList);
  const res2 = useQuery([queryKey.followingList], getFollowingList);

  const [isFollower, setIsFollower] = useState<boolean>(true);

  if (res1.isLoading || res1.isLoading) {
    return <div>loading</div>;
  }

  if (res1.isError || res2.isError) {
    return <div>error</div>;
  }

  const whatMap = () => (isFollower ? res1.data : res2.data);

  return (
    <Container>
      <SelectButton
        buttons={[
          {
            name: "follower-list",
            onActive: () => {
              setIsFollower(true);
            },
            text: `팔로워 ${res1.data?.length}`,
          },
          {
            name: "following-list",
            onActive: () => {
              setIsFollower(false);
            },
            text: `팔로잉 ${res2.data?.length}`,
          },
        ]}
        initalName="follower-list"
      />
      <UserItems>
        {whatMap().map((ele) => (
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
