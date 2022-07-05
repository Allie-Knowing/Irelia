import styled from "@emotion/styled";

const ContentsContainer = () => (
  <Container>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
    <Test>dnsfkl</Test>
  </Container>
);

export default ContentsContainer;

const Container = styled.div`
  margin-top: 23px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 15px;
`;

const Test = styled.div`
  background-color: #00FFFF;
  aspect-ratio: 4 / 5;
`;
