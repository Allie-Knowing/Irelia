import { request } from "@utils/request";

interface GetUserInfoResponse {
  name: string;
  profile: string;
  email: string;
  follwer: number;
  following: number;
  video_cnt: number;
  answer_video_cnt: number;
}

const getUserInfo = async () => await request.get<GetUserInfoResponse>("/info/{}")

export { getUserInfo };
