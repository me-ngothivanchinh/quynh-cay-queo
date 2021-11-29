import type { AppProps } from 'next/app';
import '../assets/css/global.css';
import React from 'react';

export default function App({ Component, pageProps } : AppProps) {
  return (
    <Component {...pageProps}  />
  )
}