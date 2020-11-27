import React from "react";
import Helmet from "next/head";
import siteMetadata from "../../config";
import { googleFonts } from "../../public/fonts/data.json";
const SEO = ({ description, title, image, keywords=[], children}) => {
  const metaTitle = `${title} | ${siteMetadata.title}`;
  const metaImage = /^http/.test(image)
    ? image
    : siteMetadata.siteUrl + (image||siteMetadata.image_src);
  const metaKeywords = [
    title,
    ...keywords,
    ...siteMetadata.keywords,
  ].join(",");
  const metaDescription = description || siteMetadata.description;
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:site_name" content="krychaxp.pl" />
      <meta property="og:type" content="website" />

      <meta name="twitter:creator" content={siteMetadata.author.name} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content={siteMetadata.siteUrl} />
      <meta name="twitter:card" content="summary" />

      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={siteMetadata.author.name} />
      <meta
        name="theme-color"
        content={siteMetadata.manifest.options.theme_color}
      />
      {/* <meta
        name="google-site-verification"
        content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
      /> */}
      <link rel="image_src" href={metaImage} />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="robots" href="/robots.txt" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      {siteMetadata.preconnect.map((v) => (
        <link key={v} rel="preconnect dns-prefetch" href={v} />
      ))}
      {googleFonts.fonts.map((v) => (
        <link
          key={v}
          rel="preload"
          href={v}
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      ))}
      {googleFonts.style.map((v) => (
        <React.Fragment key={v}>
          <link rel="stylesheet" href={v} />
          <link rel="preload" as="style" href={v} />
        </React.Fragment>
      ))}
      {/* {siteMetadata.scripts.map((v) => (
        <link key={v} rel="preload" as="script" href={v} />
      ))} */}
      {children}
    </Helmet>
  );
};
export default SEO;
