import { FC, useEffect } from "react";
import { useQuery } from "react-query";

export const MyPageContainer: FC = () => {
  useEffect(() => {
    const { loading, error, data } = useQuery("myInfo", () => );
  }, []);

  return (
    <div>
      <div>dd</div>
    </div>
  );
};
