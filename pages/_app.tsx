import * as React from "react";
import Head from "next/head";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core";

import SplashScreen from "../src/components/SplashScreen";

import { theme as themeObject } from "../src/theme";

import "../src/global-styles.css";

var theme = responsiveFontSizes(createMuiTheme(themeObject));

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <SplashScreen>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SplashScreen>
    </>
  );
}

export default App;
