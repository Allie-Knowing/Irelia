import styled from "@emotion/styled";
import { UserItem, SelectButton, UserItemSkeleton } from "@views/viewFollow";
import { useQuery } from "react-query";
import queryKey from "@constants/queryKey";
import { getFollowerList, getFollowingList } from "@apis/myPage";

const UserList = () => {
  const res1 = useQuery([queryKey.followerList], getFollowerList);
  const res2 = useQuery([queryKey.followingList], getFollowingList);

  if (res1.isLoading || res1.isLoading) {
    return <UserItemSkeleton />;
  }

  if (res1.isError || res2.isError) {
    return <div>error</div>;
  }

  const whatsSelected = () => (isFollower ? res1.data : res2.data);

  return (
    <UserItems>
      {whatsSelected()?.map((ele) => (
        <UserItem key={ele.id} profile={ele.profile} name={ele.name} />
      ))}
    </UserItems>
  );
}

export default UserList;

const UserItems = styled.div`
  flex: 1;
  overflow: scroll;
`;
