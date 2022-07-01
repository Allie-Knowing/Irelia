import { getMyInfo } from "@apis";
import queryKey from "@constants/queryKey";
import { FC, useEffect } from "react";
import { useQuery } from "react-query";

const MyPageContainer: FC = () => {
  const { data, isLoading, isError } = useQuery([queryKey.myInfo], getMyInfo);

  useEffect(() => {
    console.log(data);
    console.log(isLoading);
    console.log(isError);
  }, [data, isError, isLoading]);

  return (
    <div>
      <div>dd</div>
    </div>
  );
};

export default MyPageContainer;
