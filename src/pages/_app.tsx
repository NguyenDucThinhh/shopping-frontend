import { Meta } from "@/components/Meta";
import "@/styles/globals.css";
import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  Theme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import createEmotionCache from "createEmotionCache";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useMemo, useState } from "react";

import ShareCover from "public/share_cover.png";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { getThemeConfig, getThemedComponent, THEME_MODE } from "@/theme";
import { ToastContainer } from "react-toastify";
import RouteChangeLoading from "@/components/Loading/RouteChangeLoading";

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

const clientSideEmotionCache = createEmotionCache();

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<THEME_MODE>((): THEME_MODE => {
    let initialMode = localStorage.getItem("theme") as THEME_MODE;
    if (!initialMode) {
      initialMode = prefersDarkMode ? "dark" : "light";
      localStorage.setItem("theme", initialMode);
    }
    return initialMode;
  });
  const theme = useMemo<Theme>(() => {
    const _t = createTheme(getThemeConfig(mode));
    return responsiveFontSizes(deepmerge(_t, getThemedComponent(_t)), {
      breakpoints: ["xs", "xsm", "sm", "md", "lg", "xl", "xxl"],
    });
  }, [mode]);
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Meta
          title={"Shopping Center"}
          description={"A platform for blockchain data analysis"}
          imageUrl={ShareCover.src}
          // url={"https://trava.center"}
          keywords={"trava center, trava"}
        />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <ToastContainer limit={3} theme="light" hideProgressBar />
            <CssBaseline />
            <RouteChangeLoading />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </Provider>
      </CacheProvider>
    </>
  );
}
