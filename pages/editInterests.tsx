import styled from "@emotion/styled";
import { ContentsLayout } from "@views/editInterests";

const EditInterestsContainer = () => (
  <Container>
    <P1>관심있는 컨텐츠를 선택해보세요</P1>
    <P2>최대 3개까지 선택할 수 있어요</P2>
    <ContentsLayout />
  </Container>
);

export default EditInterestsContainer;

const Container = styled.section`
  padding: 20px;
`;

const P1 = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.grayscale.scale100};
`;

const P2 = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.grayscale.scale100};
  margin-top: 3px;
`;