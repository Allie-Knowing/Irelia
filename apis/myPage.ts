import { request } from "@utils/request";

const getUserId = async () => {

}

interface GetUserInfoResponse {
  name: string;
  profile: string;
  email: string;
  follwer: number;
  following: number;
  video_cnt: number;
  answer_video_cnt: number;
}

const getUserInfo = async () => {
  return (await request.get<GetUserInfoResponse>("/info/{}")).data;
};

export { getUserInfo };
