import { FC, useEffect } from "react";
import { useQuery } from "react-query";
import { request } from "https";

export const MyPageContainer: FC = () => {
  useEffect(() => {
    const { loading, error, data } = useQuery("myInfo", () => request("/info/{}"))
  }, [])

  return (
    <div>
      <div>dd</div>
    </div>
  );
};
