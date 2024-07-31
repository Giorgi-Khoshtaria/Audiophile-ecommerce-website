import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap');

:root{
  --background:${defaultTheme.colors.lotion}
  
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: var(--background);
    font-family: ${defaultTheme.fonts.monrope};
    display: flex;
    /* align-items: center; */
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    

}


`;
export default GlobalStyles;
