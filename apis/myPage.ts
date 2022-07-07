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

export const getUserInfo = async (userId: number) => {
  const data = await request.get<GetUserInfoResponse>(
    `${uri.userInfo}/${userId}`,
  );

  return data;
};

export const getMyInfo = async () => {
  const userId = await getUserId();
  return getUserInfo(userId.data.data);
};
