import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { VideoItem } from "@views/myPage";
import { useInfiniteQuery } from "react-query";
import queryKey from "@constants/queryKey";
import { getAnswerVideos } from "@apis/myPage";
import { type } from "os";

// interface VideosType {
//   id: number;
//   video_description: string;
//   video_title: string;
//   thumbnail: string;
//   views: number;
//   user_id: number;
//   user_profile: string;
//   is_adoption: number;
//   video_url: string;
//   created_at: string;
//   comment_cnt: number;
//   like_cnt: number;
//   is_mine: boolean;
//   is_like: boolean;
// }

// interface PropsType {
//   videos: VideosType[];
// }

const AnswerVideos = () => {
  const res = useInfiniteQuery([queryKey.myAnswer], getAnswerVideos, {
    getNextPageParam: (lastPage) => lastPage.data.id,
  });

  const a = 1;

  return (
    <div>
      <Container>
        <Text>
          내가 올린 답변 {a}개
        </Text>
      </Container>
      <VideoContainer>
        {res.data?.pages[0].data.map((v) => (
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
