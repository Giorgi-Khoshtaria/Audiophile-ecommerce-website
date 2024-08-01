import HomeHero from "../sub-components/home/HomeHero";
import HomeLayout from "../sub-components/home/HomeLayout";
import styled from "styled-components";
// import Navigation from "../sub-components/home/Navigation";

function Home() {
  return (
    <Container>
      <HomeHero />
      <HomeLayout />
      {/* <Navigation /> */}
    </Container>
  );
}

export default Home;
const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  padding: 0 20px;
`;
