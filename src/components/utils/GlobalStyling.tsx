import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${defaultTheme.colors.lotion};
    font-family: ${defaultTheme.fonts.monrope};
    display: flex;
    /* align-items: center; */
    justify-content: center;
    height: 100vh;
    width: 100%;

}


`;
export default GlobalStyles;
