import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font-awesome/all.min.css';
import '../styles/globals.scss';
import Layout from '../components/layouts';
import Head from 'next/head';
import { default_title, description, website, social } from '../_data/author';
import { DefaultSeo } from 'next-seo';

function MainApp({ Component, pageProps }) {
	return (
		<Layout>
			<DefaultSeo
				title={default_title}
				description={description}
				canonical={website.host_url}
				openGraph={{
					url: website.host_url,
					title: default_title,
					description: description,
					images: [
						{
							url: website.icon_location,
							width: 800,
							height: 600,
							alt: default_title,
							type: 'image/png',
						},
						{
							url: website.icon_location,
							width: 900,
							height: 800,
							alt: 'Og Image Alt Second',
							type: 'image/png',
						},
						{ url: website.icon_location },
						{ url: website.icon_location },
					],
					site_name: default_title,
				}}
				twitter={{
					handle: social.twitter.account,
					site: social.twitter.account,
					cardType: 'summary_large_image',
				}}
			/>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MainApp;
