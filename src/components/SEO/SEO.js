import Head from 'next/head';

const SEO = ({ title, description, path = '' }) => {
  const defaultTitle = 'Zia Ur Rehman | Ruby on Rails Developer in Pakistan';
  const siteTitle = title ? `${title} | Zia Ur Rehman` : defaultTitle;
  const siteDescription =
    description ||
    'Zia Ur Rehman is a Ruby on Rails and React full-stack software engineer in Pakistan with 5 years of experience building APIs, scalable web apps, and AI-enabled workflows.';

  const siteUrl = 'https://zia-ur-rehman1.github.io/portfolio';
  const canonicalUrl = `${siteUrl}${path}`;
  const siteImage = `${siteUrl}/favicon.ico`;

  const keywords = [
    'Zia Ur Rehman',
    'Ruby on Rails developer Pakistan',
    'Ruby on Rails engineer Pakistan',
    'Full stack developer Pakistan',
    'Rails React developer',
    'Remote Ruby on Rails engineer',
    'Backend API developer Rails',
    'Software Engineer Pakistan'
  ].join(', ');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Zia Ur Rehman',
    url: siteUrl,
    image: siteImage,
    jobTitle: 'Full-Stack Software Engineer (Ruby on Rails & React)',
    description: siteDescription,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK'
    },
    sameAs: [
      'https://github.com/Zia-Ur-Rehman1',
      'https://linkedin.com/in/zia1'
    ],
    knowsAbout: [
      'Ruby on Rails',
      'React',
      'PostgreSQL',
      'API Integration',
      'AI Automation',
      'Full-Stack Development'
    ]
  };

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:locale" content="en_US" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content={siteImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default SEO;
