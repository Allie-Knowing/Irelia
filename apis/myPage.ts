import uri from "@constants/uri";
import request from "@utils/request";
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

interface VideoObject {
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
}

interface GetMyPageVideoResponse {
  data: VideoObject[];
}

interface GetFollowListResponse {
  id: number;
  profile: string;
  name: string;
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

export const getMyQuesionList = async (page: number, size: number) => {
  const userId = (await getUserId()).data.data;

  return request.get<GetMyPageVideoResponse>(
    `${uri.questionVideos}/${userId}`,
    {
      params: {
        page,
        size,
      },
    },
  );
};

export const getUserQuesionList = async (
  userId: number,
  page: number,
  size: number,
) =>
  request.get<GetMyPageVideoResponse>(`${uri.questionVideos}/${userId}`, {
    params: {
      page,
      size,
    },
  });

export const getMyAnswerList = async (page: number, size: number) => {
  const userId = (await getUserId()).data.data;

  return request.get<GetMyPageVideoResponse>(`${uri.answerVideos}/${userId}`, {
    params: {
      page,
      size,
    },
  });
};

export const getUserAnswerList = async (
  userId: number,
  page: number,
  size: number,
) =>
  request.get<GetMyPageVideoResponse>(`${uri.answerVideos}/${userId}`, {
    params: {
      page,
      size,
    },
  });

export const getFollowerList = async () => {
  const userId = await getUserId();
  const res = await request.get<GetFollowListResponse[]>(`${uri.follwerList}`, {
    params: {
      userId: userId.data.data,
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
        userId: userId.data.data,
      },
    },
  );

  return res.data;
};

export const WithdrawalMember = async () => {
  const res = await request.delete(`${uri.withdrawal}`);

  return res;
};
