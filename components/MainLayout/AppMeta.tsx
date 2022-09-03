import React from "react";
import Head from "next/head";
import { NextSeo } from 'next-seo'
import { AppConfig } from '../../utils/AppConfig';
import { useRouter } from "next/router";

interface AppMetaProps {
  title?: string,
  description?: string,
  canonical?: string,
  cover?: string
}

const AppMeta = ({ title, description, canonical, cover }: AppMetaProps) => {

  const site = process.env.NEXT_PUBLIC_HOST
  const slug = useRouter().pathname
  const URL = slug ? site + slug : slug;



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
        title= {title ? title + ' _ ' + AppConfig.site_name : AppConfig.site_name}
        description={description ? description : AppConfig.description}
        canonical={canonical ? canonical : URL}
        openGraph={{
          url: URL,
          title: title ? title + ' _ ' + AppConfig.site_name : AppConfig.site_name,
          description: description ? description : AppConfig.description,
          // images: [
          //   {
          //     url: 'https://www.example.ie/og-image-01.jpg',
          //     width: 800,
          //     height: 600,
          //     alt: 'Og Image Alt',
          //     type: 'image/jpeg',
          //   },
          //   {
          //     url: 'https://www.example.ie/og-image-02.jpg',
          //     width: 900,
          //     height: 800,
          //     alt: 'Og Image Alt Second',
          //     type: 'image/jpeg',
          //   },
          //   { url: 'https://www.example.ie/og-image-03.jpg' },
          //   { url: 'https://www.example.ie/og-image-04.jpg' },
          // ],
          site_name: AppConfig.site_name,
        }}
        twitter={{
          handle: AppConfig.username,
          site: AppConfig.username,
          cardType: 'summary_large_image',
        }}
      />



    </>
  );
};

export default AppMeta;
