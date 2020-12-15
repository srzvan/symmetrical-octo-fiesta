import * as React from "react";
import CSSBaseline from "@material-ui/core/CssBaseline";

import SplashScreen from "../src/components/SplashScreen";

import "../src/global-styles.css";

function App({ Component, pageProps }) {
  return (
    <>
      <CSSBaseline />
      <SplashScreen>
        <Component {...pageProps} />
      </SplashScreen>
    </>
  );
}

export default App;
