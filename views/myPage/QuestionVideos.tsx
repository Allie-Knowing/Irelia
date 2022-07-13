import styled from "@emotion/styled";
import { VideoItem, VideoItemSkeleton } from "@views/myPage";
import { useInfiniteQuery } from "react-query";
import queryKey from "@constants/queryKey";
import { getMyQuesionList } from "@apis/myPage";
import { useInView } from "react-intersection-observer";
import { useEffect, useMemo } from "react";

const QuestionVideos = () => {
  const questionRes = useInfiniteQuery(
    [queryKey.myQuestion],
    async ({ pageParam = 1 }) => {
      const res = (await getMyQuesionList(pageParam, 10)).data.data;

      return { page: pageParam, data: res };
    },
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
      retry: 0,
    },
  );

  const { ref, inView } = useInView();

  const questionList = useMemo(
    () => questionRes.data?.pages.flatMap((v) => v.data),
    [questionRes.data?.pages],
  );

  useEffect(() => {
    if (inView && !questionRes.isError) {
      questionRes.fetchNextPage();
    }
  }, [inView, questionRes]);

  const a = 1;

  return (
    <div>
      <Container>
        <Text>
          내가 올린 질문 {a}개
        </Text>
      </Container>
      <VideoContainer>
        {questionRes.isLoading
          ? Array(3)
            .fill(0)
            .map((_, idx) => <VideoItemSkeleton key={idx} />)
          : questionList?.map((v) => (
            <VideoItem
              key={v.id}
              thumbnail={v.thumbnail}
              likeCnt={v.like_cnt}
              views={v.views}
            />
          ))}
        <div ref={ref} />
      </VideoContainer>
    </div>
  );
};

export default QuestionVideos;

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
