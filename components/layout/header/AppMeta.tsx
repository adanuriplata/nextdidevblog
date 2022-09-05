import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { AppConfig } from '../../../utils/AppConfig';
import { useRouter } from 'next/router';

interface AppMetaProps {
  title?: string;
  description?: string;
  canonical?: string;
  cover?: string;
}

export const AppMeta = ({
  title,
  description,
  canonical,
  cover,
}: AppMetaProps) => {
  const site = process.env.NEXT_PUBLIC_HOST;
  const slug = useRouter().pathname;
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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d0a1c" />
        <meta name="msapplication-TileColor" content="#0d0a1c" />
        <meta name="theme-color" content="#333333" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        />
      </Head>

      <NextSeo
        title={
          title ? title + ' _ ' + AppConfig.site_name : AppConfig.site_name
        }
        description={description ? description : AppConfig.description}
        canonical={canonical ? canonical : URL}
        openGraph={{
          url: URL,
          title: title
            ? title + ' _ ' + AppConfig.site_name
            : AppConfig.site_name,
          description: description ? description : AppConfig.description,
          images: [
            {
              url: cover ? site + cover : site + '/img/og-image.jpg',
              width: 800,
              height: 600,
              alt: '/img/Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: cover ? site + cover : site + '/img/og-image.jpg',
              width: 900,
              height: 800,
              alt: '/img/Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: cover ? site + cover : site + '/img/og-image.jpg' },
            { url: cover ? site + cover : site + '/img/og-image.jpg' },
          ],
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
