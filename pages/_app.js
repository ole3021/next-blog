import "styles/global.scss";
// import "styles/mapbox.css";
import SideNavLayout from "layouts/SideNavLayout";

import React, { useContext } from "react";
import Head from "next/head";

import GlobalContextProvider, {
  GlobalStateContext,
} from "context/GlobalContextProvider";

const DoztoCom = ({ Component, pageProps, postCount }) => {
  return (
    <GlobalContextProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/scripts/util.js"></script>
        <script>
          document.getElementsByTagName("html")[0].className += " js";
        </script>
      </Head>
      <SideNavLayout>
        <Component {...pageProps} />
      </SideNavLayout>
    </GlobalContextProvider>
  );
};

export default DoztoCom;
