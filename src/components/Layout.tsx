import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "./sub-components/Header";
import { useEffect } from "react";
import styled from "styled-components";
import Footer from "./sub-components/Footer";
// import Footer from "./sub-components/Footer";

const navigationLinks: string[] = [
  "/home",
  "/headphones",
  "/speakers",
  "/earphones",
];

function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname, "wwwwwwww");
  const navigate = useNavigate();
  useEffect(() => {
    if (navigationLinks.includes(pathname)) {
      navigate(pathname);
    } else {
      navigate("/home");
    }
    console.log("mounted");
  }, []);
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Layout;
const Container = styled.div`
  width: 100%;
`;
