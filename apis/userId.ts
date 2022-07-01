import request from "@utils/request";

interface GetUserIdResponse {
  data: number;
}

export const getUserId = () => request.get<GetUserIdResponse>("user/my");
