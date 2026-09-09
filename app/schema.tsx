export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Growth Bridge',
    url: 'https://www.growthbriidge.in',
    logo: 'https://www.growthbriidge.in/gb%20logo/main%20logo.png',
    description:
      'Growth Bridge is a performance marketing and conversion design agency. We help D2C and e-commerce brands grow through performance marketing and build high-converting websites for D2C, e-commerce, healthcare, and real estate businesses.',
    email: 'growthbriidge@gmail.com',
    telephone: '+919313070872',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    founder: {
      '@type': 'Person',
      name: 'Kuldeep H. Dodiya',
      jobTitle: 'Founder & CEO',
    },
    sameAs: [
      'https://www.linkedin.com/company/growth-brridge/',
      'https://www.instagram.com/_growth_bridge_/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Growth Bridge',
    url: 'https://www.growthbriidge.in',
    description:
      'Performance marketing agency for D2C and e-commerce brands. Conversion-focused websites for D2C, healthcare, and real estate.',
  };

  const serviceSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Performance Marketing',
      provider: { '@type': 'Organization', name: 'Growth Bridge' },
      description:
        'Full-funnel paid media campaigns for D2C and e-commerce brands — engineered for profitable customer acquisition and measurable returns.',
      serviceType: 'Performance Marketing',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Websites & Conversion',
      provider: { '@type': 'Organization', name: 'Growth Bridge' },
      description:
        'Conversion-focused websites for D2C, e-commerce, healthcare, and real estate businesses — turning visitors into customers, backed by data.',
      serviceType: 'Web Design',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Creative & Campaign Strategy',
      provider: { '@type': 'Organization', name: 'Growth Bridge' },
      description:
        'Strategy-led creative that captures attention, communicates value, and drives action — from ad creatives to full campaign concepts.',
      serviceType: 'Creative Services',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
