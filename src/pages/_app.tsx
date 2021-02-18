import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutProvider from '../layout';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../store';

const { store, persistor } = configureStore();

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Provider store={store}>
      <PersistGate loading={<p>Loading</p>} persistor={persistor}>
        <Head>
          <title>Vofis</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://egkoppel.github.io/product-sans/google-fonts.css"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          ></link>

          {/* links for Material UI */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </Head>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
