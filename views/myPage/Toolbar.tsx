import { FC } from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  position: fixed;
  top: 0px;
  box-shadow: 0px 0px 8px 2px #000000;
  width: 100%;
  height: 100px;
`;

const Toolbar: FC = () => (
  <Container>
    <div>고민노노</div>
  </Container>
);

export default Toolbar;
