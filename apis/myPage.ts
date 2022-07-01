import uri from "@constants/uri";
import request from "@utils/request";
import { getUserId } from "./userId";

interface GetUserInfoResponse {
  name: string;
  profile: string;
  email: string;
  follwer: number;
  following: number;
  video_cnt: number;
  answer_video_cnt: number;
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
