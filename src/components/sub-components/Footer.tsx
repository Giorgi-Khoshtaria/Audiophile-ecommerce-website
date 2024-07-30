import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { defaultTheme } from "../utils/defaultTheme";
function Footer() {
  const navigation: string[] = ["home", "headphones", "speakers", "earphones"];
  return (
    <Wrapper>
      <Container>
        <Content>
          <Logo>
            <Link to="/home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="143"
                height="25"
                viewBox="0 0 143 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.9755 4.10884V0H53.2131V4.10884H57.9755ZM41.8721 20.3997C43.5076 20.3997 44.9648 19.8429 46.1074 18.8803L46.5635 19.9241H50.1425V0.792094L45.3611 0.792093V6.38308C44.3548 5.75732 43.1686 5.40721 41.8721 5.40721C37.5634 5.40721 34.4943 8.52769 34.4943 12.896C34.4943 17.2644 37.5634 20.3997 41.8721 20.3997ZM7.36265 20.3849C8.99354 20.3849 10.4497 19.8476 11.5995 18.9152L12.0137 19.9093H15.7527V5.85311L12.1479 5.85285L11.6531 6.93986C10.4936 5.98222 9.01642 5.42934 7.36265 5.42934C3.06909 5.42934 0 8.52769 0 12.8809C0 17.2493 3.06909 20.3849 7.36265 20.3849ZM8.00933 16.098C6.19773 16.098 4.86614 14.7278 4.86614 12.8921C4.86614 11.0677 6.18681 9.69748 8.00933 9.69748C9.82094 9.69748 11.1525 11.0677 11.1525 12.8921C11.1525 14.7278 9.82094 16.098 8.00933 16.098ZM32.4542 13.8899C32.4542 17.823 29.6916 20.3849 25.544 20.3849C21.396 20.3849 18.6184 17.823 18.6184 13.8899V5.86794H23.4549V13.6793C23.4549 15.163 24.2516 16.0355 25.544 16.0355C26.836 16.0355 27.6177 15.1482 27.6177 13.6793V5.86794H32.4542V13.8899ZM39.3758 12.8963C39.3758 14.7317 40.7074 16.1128 42.519 16.1128C44.3306 16.1128 45.6622 14.7317 45.6622 12.8963C45.6622 11.0607 44.3306 9.67952 42.519 9.67952C40.7074 9.67952 39.3758 11.0607 39.3758 12.8963ZM58.0127 5.86768V19.9239H53.1762V5.86768H58.0127ZM68.1095 20.3849C72.6727 20.3849 75.9821 17.2384 75.9821 12.896C75.9821 8.53888 72.6727 5.40747 68.1095 5.40747C63.5315 5.40747 60.237 8.53888 60.237 12.896C60.237 17.2384 63.5315 20.3849 68.1095 20.3849ZM65.0812 12.8963C65.0812 14.7546 66.346 16.0355 68.1095 16.0358C69.873 16.0358 71.1378 14.7548 71.1378 12.8966C71.1378 11.0492 69.873 9.75709 68.1095 9.75709C66.346 9.75709 65.0812 11.038 65.0812 12.8963ZM82.9978 25V19.4663C83.9888 20.0655 85.1511 20.3997 86.4208 20.3997C90.7144 20.3997 93.7835 17.2753 93.7835 12.896C93.7835 8.51676 90.7144 5.40721 86.4208 5.40721C84.7523 5.40721 83.2662 5.98508 82.1114 6.98463L81.5056 5.86794H78.2165V25H82.9978ZM82.6307 12.8958C82.6307 14.7424 83.9623 16.1126 85.7739 16.1126C87.5743 16.1126 88.9171 14.7424 88.9171 12.8958C88.9171 11.0492 87.5855 9.679 85.7739 9.679C83.9623 9.679 82.6307 11.0492 82.6307 12.8958ZM100.839 19.9241V12.4181C100.839 10.6143 101.751 9.57462 103.215 9.57462C104.477 9.57462 105.046 10.4011 105.046 12.0222V19.9241H109.882V11.4597C109.882 7.81629 107.811 5.45225 104.587 5.45225C103.188 5.45225 101.873 5.95931 100.839 6.79279V0.792093H96.0023V19.9241H100.839ZM117.574 0V4.10884H112.811V0H117.574ZM117.611 5.86768H112.774V19.9239H117.611V5.86768ZM125.489 0.792093V19.9241H120.653V0.792093H125.489ZM135.34 20.3851C138.863 20.3851 141.704 18.3808 142.692 15.1729H137.879C137.414 15.9957 136.47 16.4911 135.34 16.4911C133.813 16.4911 132.79 15.6573 132.474 14.045H142.9C142.963 13.6103 143 13.1868 143 12.7633C143 8.63988 139.866 5.40747 135.34 5.40747C130.933 5.40747 127.714 8.57611 127.714 12.8854C127.714 17.1795 130.959 20.3851 135.34 20.3851ZM132.559 11.3639H138.236C137.811 9.95908 136.8 9.20109 135.34 9.20109C133.931 9.20109 132.951 9.96767 132.559 11.3639Z"
                  fill="white"
                />
              </svg>
            </Link>
          </Logo>
          <nav>
            <Ul>
              {navigation.map((nav) => {
                return (
                  <Li key={nav}>
                    <Link to={nav}>{nav}</Link>
                  </Li>
                );
              })}
            </Ul>
          </nav>
        </Content>
        <Information>
          <div>
            <MainInfo>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </MainInfo>
            <CopyRight>Copyright 2021. All Rights Reserved</CopyRight>
          </div>
          <Links>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.148L19.681 14.707H16.561V24H22.677C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
            >
              <path
                d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.80305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 11.101 3.21405 11.819 6.29305C7.728 6.08805 4.1 4.12805 1.671 1.14905C0.381 3.36205 1.002 6.25705 3.194 7.72305C2.388 7.69705 1.628 7.47605 0.965 7.10705C0.911 9.38805 2.546 11.522 4.914 11.997C4.221 12.185 3.462 12.229 2.69 12.081C3.316 14.037 5.134 15.46 7.29 15.5C5.22 17.123 2.612 17.848 0 17.54C2.179 18.937 4.768 19.752 7.548 19.752C16.69 19.752 21.855 12.031 21.543 5.10605C22.505 4.41105 23.34 3.54405 24 2.55705Z"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM5.838 12C5.838 8.597 8.597 5.838 12 5.838C15.403 5.838 18.162 8.597 18.162 12C18.162 15.404 15.403 18.163 12 18.163C8.597 18.163 5.838 15.403 5.838 12ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM16.965 5.595C16.965 4.8 17.61 4.155 18.406 4.155C19.201 4.155 19.845 4.8 19.845 5.595C19.845 6.39 19.201 7.035 18.406 7.035C17.61 7.035 16.965 6.39 16.965 5.595Z"
                fill="white"
              />
            </svg>
          </Links>
        </Information>
      </Container>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors.chineseblack};
`;
const Container = styled.div`
  width: 1440px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${defaultTheme.colors.chineseblack};
  padding: 75px 20px 48px 20px;
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 143px;
  height: 25px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;

const Li = styled.li`
  list-style-type: none;

  a {
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 192.308% */
    letter-spacing: 2px;
    font-family: ${defaultTheme.fonts.monrope};
    color: ${defaultTheme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${defaultTheme.colors.peru};
    }
  }
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MainInfo = styled.p`
  width: 540px;
  color: ${defaultTheme.colors.white};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
  margin-bottom: 56px;
  margin-top: 36px;
`;
const CopyRight = styled.p`
  width: 540px;
  color: ${defaultTheme.colors.white};
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  svg {
    cursor: pointer;

    path {
      transition: fill 0.3s ease;
    }

    &:hover path {
      fill: ${defaultTheme.colors
        .peru}; /* or use an orange color code like #FFA500 */
    }
  }
`;
