import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@emotion/react";
import theme from "@utils/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
