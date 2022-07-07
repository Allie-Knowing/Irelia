import uri from "@constants/uri";
import request, { requestWithNoToken } from "@utils/request";
import { getUserId } from "@apis";

interface GetUserInfoResponse {
  data: {
    name: string;
    profile: string;
    email: string;
    follower_cnt: number;
    following_cnt: number;
    video_cnt: number;
    answer_video_cnt: number;
  };
}

export const getUserInfo = async (userId: number) => {
  const res = await request.get<GetUserInfoResponse>(
    `${uri.userInfo}/${userId}`,
  );

  return res.data;
};

export const getMyInfo = async () => {
  const userId = await getUserId();
  return getUserInfo(userId.data.data);
};

interface GetQuestionVideoResponse {
  data: {
    id: number;
    video_description: string;
    video_title: string;
    thumbnail: string;
    views: number;
    user_id: number;
    user_profile: string;
    is_adoption: number;
    video_url: string;
    created_at: string;
    comment_cnt: number;
    like_cnt: number;
    is_mine: boolean;
    is_like: boolean;
  };
}

export const getQuestionVideos = async ({ pageParam = 0 }) => {
  const userId = await getUserId();
  const res = await requestWithNoToken.get<GetQuestionVideoResponse>(
    `${uri.questionVideos}/${userId}`,
    {
      params: {
        page: pageParam,
        size: 6,
      },
    },
  );
  return res.data;
};

interface GetFollowListResponse {
  id: number;
  profile: string;
  name: string;
}

export const getFollowerList = async () => {
  const userId = await getUserId();
  const res = await request.get<GetFollowListResponse[]>(`${uri.follwerList}`, {
    params: {
      userId,
    },
  });

  return res.data;
};

export const getFollowingList = async () => {
  const userId = await getUserId();
  const res = await request.get<GetFollowListResponse[]>(
    `${uri.followingList}`,
    {
      params: {
        userId,
      },
    },
  );

  return res.data;
};
