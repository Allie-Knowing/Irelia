import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import ImageWithDefault from "@components/ImageWithDefault";
import { useQuery } from "react-query";
import queryKey from "@constants/queryKey";
import { getMyInfo } from "@apis/myPage";
import { UserInfoSkeleton } from "@views/myPage";

const UserInfo: FC = () => {
  const { data, isLoading, isError } = useQuery([queryKey.myInfo], getMyInfo);
  const shortenData = data?.data;

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <UserInfoSkeleton />;
  }

  if (isError) {
    return <div>error</div>;
  }

  return (
    <Container>
      <Outer>
        <ProfileImage src={shortenData?.profile || ""} width={65} height={65} />
        <Inner>
          <Name>{shortenData?.name}</Name>
          <FollowContainer>
            <Follow>
              팔로워
              {shortenData?.follower_cnt}
            </Follow>
            <Follow>
              팔로잉
              {shortenData?.following_cnt}
            </Follow>
          </FollowContainer>
        </Inner>
      </Outer>
    </Container>
  );
};

export default UserInfo;

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
  color: ${({ theme }) => theme.colors.grayscale.scale40};
`;

const Name = styled.p`
  font-size: 16px;
`;

const ProfileImage = styled(ImageWithDefault)`
  border-radius: 50%;
  object-fit: cover;
`;
