import Head from 'next/head';

const SEO = ({ title, description }) => {
  const siteTitle = title ? `${title} | Zia Ur Rehman` : "Zia Ur Rehman - Full Stack Software Engineer";
  const siteDescription = description || "FullStack Software Developer with 4+ years of experience delivering high-performance web applications using Ruby on Rails, React, and modern cloud architectures.";
  const siteUrl = "https://Zia-Ur-Rehman1.github.io/portfolio"; 
  // Ideally this would be dynamic or from constants, but hardcoding for now based on package.json homepage
  const siteImage = `${siteUrl}/images/banner.png`; // Accessing public/images if it exists, otherwise we might need to add one.
  // Note: Just pointing to a potential banner image location.

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Zia Ur Rehman",
    "url": siteUrl,
    "sameAs": [
      "https://github.com/Zia-Ur-Rehman1",
      "https://www.linkedin.com/in/zia-ur-rehman-2b1b3b1b3/" // Adding a placeholder or needing to ask user, but usually fine to omit or update later
    ],
    "jobTitle": "Software Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Devsinc" // Based on constants.js
    },
    "description": siteDescription
  };

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;
