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

export const getUserInfo = () => {
  const userId = getUserId();
  request.get<GetUserInfoResponse>(`/info/${userId}`);
};
