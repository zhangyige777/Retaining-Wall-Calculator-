import '../public/styles.css'
import Head from 'next/head'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  // AdSense配置
  const [adSenseConfig] = useState({
    googleAdClient: 'ca-pub-XXXXXXXXXXXXXXXX', // 这里需要替换为您的AdSense Publisher ID
  })

  return (
    <>
      <Head>
        {/* Google AdSense */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseConfig.googleAdClient}`}
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* SEO Meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>

      <Component {...pageProps} />

      {/* 全局AdSense自动广告 */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adSenseConfig.googleAdClient}
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
    </>
  )
}

export default MyApp