import queryKey from "@constants/queryKey";
import { FC, useEffect } from "react";
import { useQuery } from "react-query";

export const MyPageContainer: FC = () => {
  useEffect(() => {
    const { loading, error, data } = useQuery([queryKey.myInfo, 1], );
  }, []);

  return (
    <div>
      <div>dd</div>
    </div>
  );
};
