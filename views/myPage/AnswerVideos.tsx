import { useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { VideoItem } from "@views/myPage";
import { useInfiniteQuery } from "react-query";
import queryKey from "@constants/queryKey";
import { getMyAnswerList } from "@apis/myPage";
import { useInView } from "react-intersection-observer";

const AnswerVideos = () => {
  const answerRes = useInfiniteQuery(
    [queryKey.myAnswer],
    async ({ pageParam = 1 }) => {
      const res = (await getMyAnswerList(pageParam, 10)).data.data

      return { page: pageParam, data: res };
    },
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
    },
  );

  const { ref, inView } = useInView();

  const answerList = useMemo(
    () => answerRes.data?.pages.flatMap((v) => v.data),
    [answerRes.data?.pages],
  );

  useEffect(() => {
    if (inView) {
      answerRes.fetchNextPage();
    }
  }, [answerRes, inView]);

  const a = 1;

  return (
    <div>
      <Container>
        <Text>
          내가 올린 답변 {a}개
        </Text>
      </Container>
      <VideoContainer>
        {answerList?.map((v) => (
          <VideoItem
            key={v.id}
            thumbnail={v.thumbnail}
            likeCnt={v.like_cnt}
            views={v.views}
          />
        ))}
      </VideoContainer>
    </div>
  );
};

export default AnswerVideos;

const Container = styled.div`
  padding: 0px 20px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grayscale.scale100};
  font: ${({ theme }) => theme.fonts.body3};
`;

const VideoContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  flex: 1;
  overflow: scroll;
  padding: 0px 20px 20px;
`;
