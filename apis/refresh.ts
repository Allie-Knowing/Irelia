import { uri } from "@constants";
import { requestWithNoToken } from "@utils/request";

interface RefreshResponse {
  access_token: string;
  refresh_token: string;
}

export const doRefreshToken = (refreshToken: string) =>
  requestWithNoToken.post<RefreshResponse>(
    uri.refresh,
    {},
    {
      headers: { "Refresh-Token": refreshToken },
    },
  );
