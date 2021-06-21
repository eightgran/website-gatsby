import { createGlobalStyle } from "styled-components";
// Import default 'Montserrat' style.
import "@fontsource/montserrat"
// Import additional 'Montserrat' styles. (100-900).
import "@fontsource/montserrat/100.css"
import "@fontsource/montserrat/200.css"
import "@fontsource/montserrat/300.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import "@fontsource/montserrat/800.css"
import "@fontsource/montserrat/900.css"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Montserrat';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`