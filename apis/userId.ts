import uri from "@constants/uri";
import request from "@utils/request";

interface GetUserIdResponse {
  data: number;
}

export const getUserId = () => request.get<GetUserIdResponse>(uri.userId);
