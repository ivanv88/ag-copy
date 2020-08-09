import React from 'react';
import App from 'next/app';
import ColorContextProvider, { ColorContext } from '../components/context/colorcontext'
import ServiceNavContextProvider, { ServiceNavContext } from '../components/context/servicenavcontext'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ServiceNavContextProvider >
        <ColorContextProvider >
            <Component {...pageProps} />
        </ColorContextProvider>
      </ServiceNavContextProvider>
    )}
}

export default MyApp;