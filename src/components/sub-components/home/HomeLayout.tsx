import Navigation from "./Navigation";
import styled from "styled-components";
import { defaultTheme } from "../../utils/defaultTheme";
import Blogs from "./Blogs";
import MainBlog from "./MainBlog";
// import Footer from "../Footer";

function HomeLayout() {
  return (
    <Container>
      <Content>
        <Navigation />
        <Blogs />
        <MainBlog />
        {/* <Footer /> */}
      </Content>
    </Container>
  );
}

export default HomeLayout;
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: ${defaultTheme.colors.peru}; */

  /* margin-top: 1000px; */
  /* background-color: ${defaultTheme.colors.peru}; */
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
