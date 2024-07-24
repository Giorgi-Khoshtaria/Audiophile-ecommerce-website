import React from "react";
import styled from "styled-components";
import { defaultTheme } from "../utils/defaultTheme";
function Footer() {
  return (
    <Wrapper>
      <Container>fooooooooooooooooooooooterrrrrrrrrrrrrrrrrrrrrrrrr</Container>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${defaultTheme.colors.peru};
`;
const Container = styled.div`
  width: 1440px;
  background-color: ${defaultTheme.colors.peru};
`;
