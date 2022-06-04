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
      </Head>
      <NextSeo 
          title="DistorDev"
          description="Mi sitio web personal"
        />
    </>
  );
};

export default AppMeta;
