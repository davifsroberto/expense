import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/globalStyle";
import { Theme } from "../styles/theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
