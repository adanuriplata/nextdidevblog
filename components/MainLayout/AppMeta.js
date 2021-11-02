import React from "react";
import Head from "next/head";

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
      <div>
        {/* Data de SEO */}
        {/* instalar  https://www.npmjs.com/package/next-seo */}
      </div>
    </>
  );
};

export default AppMeta;
