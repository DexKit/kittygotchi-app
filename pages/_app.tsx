import TransactionUpdater from '@/modules/common/components/TransactionUpdater';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Web3ReactProvider } from '@web3-react/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { IntlProvider } from 'react-intl';
import 'src/app.css';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';

import { MagicStateProvider } from '@/modules/common/components/MagicStateProvider';
import { useOrderedConnectors } from '@/modules/common/hooks/app';
import { getConnectorName } from '@/modules/common/utils/wallet';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DefaultSeo } from 'next-seo';
import { useMemo } from 'react';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: any;
}

const queryClient = new QueryClient();

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const connectors = useOrderedConnectors();

  const key = useMemo(
    () =>
      connectors.map((connector) => getConnectorName(connector[0])).join('-'),
    [connectors]
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <IntlProvider locale="en-US" defaultLocale="en-US">
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Web3ReactProvider connectors={connectors} key={key}>
                <ThemeProvider theme={theme}>
                  <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <DefaultSeo
                      titleTemplate="Dexkit - %s"
                      defaultTitle="Dexkit"
                    />
                    <CssBaseline />
                    <MagicStateProvider>
                      <Component {...pageProps} />
                      <TransactionUpdater />
                    </MagicStateProvider>
                  </SnackbarProvider>
                </ThemeProvider>
              </Web3ReactProvider>
            </LocalizationProvider>
          </IntlProvider>
        </Hydrate>
      </QueryClientProvider>
    </CacheProvider>
  );
}
