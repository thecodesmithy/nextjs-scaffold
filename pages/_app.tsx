import type { AppProps } from "next/app";
import * as React from "react";

function _App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default _App;
