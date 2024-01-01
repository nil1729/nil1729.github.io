import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font-awesome/all.min.css';
import '../styles/globals.scss';
import Layout from '../components/layouts';
import Head from 'next/head';
import author from '../_data/author';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';

function MainApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        title={author.default_title}
        description={author.description}
        canonical={author.website.host_url}
        openGraph={{
          type: 'profile',
          url: author.website.host_url,
          title: author.default_title,
          description: author.description,
          site_name: author.default_title,
          profile: {
            firstName: author.first_name,
            lastName: author.last_name,
            username: author.username,
            gender: author.gender,
          },
          images: [
            {
              url: author.website.icon_location,
              width: 800,
              height: 600,
              alt: author.default_title,
              type: 'image/png',
            },
            {
              url: author.website.icon_location,
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/png',
            },
            { url: author.website.icon_location },
            { url: author.website.icon_location },
          ],
        }}
        twitter={{
          handle: author.social.twitter.account,
          site: author.social.twitter.account,
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: author.default_title,
          },
          {
            name: 'application-name',
            content: author.default_title,
          },
          {
            name: 'keywords',
            content: author.username,
          },
          {
            name: 'apple-mobile-web-app-title',
            content: author.default_title,
          },
        ]}
        robotsProps={{
          notranslate: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'standard',
        }}
      />
      <SocialProfileJsonLd
        type='Person'
        name={author.default_title}
        url={author.website.host_url}
        sameAs={[
          author.social.facebook.url,
          author.social.twitter.url,
          author.social.linkedin.url,
          author.social.github.url,
          author.social.instagram.url,
        ]}
        address={{
          streetAddress: author.address.street_address,
          addressLocality: author.address.address_locality,
          addressRegion: author.address.address_region,
          postalCode: author.address.postal_code,
          addressCountry: author.address.address_country,
        }}
        contactPoint={[
          {
            telephone: author.contact.telephone,
            email: author.contact.email,
          },
        ]}
      />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MainApp;
