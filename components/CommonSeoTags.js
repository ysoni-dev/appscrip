import Head from "next/head";
import seodata from "../json/program.json";

function CommonSeoTags() {
  return (
    <>
      <Head>
        <title>{seodata.seotags.title}</title>
        <meta name="description" content={seodata.seotags.description} />

        {/* Open Graph Meta Tags (for social media) */}
        <meta property="og:title" content={seodata.seotags.title} />
        <meta property="og:description" content={seodata.seotags.description} />
        <meta property="og:image" content={seodata.seotags.image} />
        <meta property="og:url" content={seodata.seotags.url} />

        {/* Twitter Meta Tags (for Twitter Cards) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seodata.seotags.title} />
        <meta
          name="twitter:description"
          content={seodata.seotags.description}
        />
        <meta name="twitter:image" content={seodata.seotags.image} />

        {/* Canonical Link */}
        <link rel="canonical" href={seodata.seotags.canonicalUrl} />

        {/* Other Meta Tags */}
        <meta name="keywords" content={seodata.seotags.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </>
  );
}
export default CommonSeoTags;
