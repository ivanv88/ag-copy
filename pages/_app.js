import React from 'react';
import App from 'next/app';
import ColorContextProvider, { ColorContext } from '../components/context/colorcontext'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
            <ColorContextProvider >
                <Component {...pageProps} />;
            </ColorContextProvider>
    )}
}

export default MyApp;