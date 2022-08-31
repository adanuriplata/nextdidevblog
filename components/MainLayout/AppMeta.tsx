import React from "react";
import Head from "next/head";
import {NextSeo} from 'next-seo'

const AppMeta = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charSet" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=-1"
          key="viewport"
        />
                <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css'
        />
      </Head>
      <NextSeo 
          title="DistorDev"
          description="Mi sitio web personal"
        />
    </>
  );
};

export default AppMeta;
