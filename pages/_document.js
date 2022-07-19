import Document, { Html, Head, Main, NextScript } from 'next/document';
import { default_title, description } from '../_data/author';
class MyDocument extends Document {
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<meta name='keywords' content='nil1729' />
					<meta httpEquiv='X-UA-Compatible' content='IE=7' />
					<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
					<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
					<meta name='application-name' content={default_title} />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='default' />
					<meta name='apple-mobile-web-app-title' content={default_title} />
					<meta name='format-detection' content='telephone=no' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='msapplication-TileColor' content='#FBFBFF' />
					<meta name='msapplication-tap-highlight' content='no' />
					<meta name='theme-color' content='#FBFBFF' />

					<link rel='apple-touch-icon' href='/icons/apple/512.png' />
					<link rel='apple-touch-icon' sizes='152x152' href='/icons/apple/152.png' />
					<link rel='apple-touch-icon' sizes='180x180' href='/icons/apple/180.png' />
					<link rel='apple-touch-icon' sizes='167x167' href='/icons/apple/167.png' />

					<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon/16.png' />
					<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon/32.png' />
					<link rel='manifest' href='/manifest.json' />
					<link rel='shortcut icon' href='/favicon.ico' />

					<link
						rel='apple-touch-startup-image'
						href='/icons/apple/splash/2048x2732.png'
						sizes='2048x2732'
					/>
					<link
						rel='apple-touch-startup-image'
						href='/icons/apple/splash/1668x2224.png'
						sizes='1668x2224'
					/>
					<link
						rel='apple-touch-startup-image'
						href='/icons/apple/splash/1536x2048.png'
						sizes='1536x2048'
					/>
					<link
						rel='apple-touch-startup-image'
						href='/icons/apple/splash/1125x2436.png'
						sizes='1125x2436'
					/>
					<link
						rel='apple-touch-startup-image'
						href='/icons/apple/splash/1242x2688.png'
						sizes='1242x2688'
					/>
					<link
						rel='apple-touch-startup-image'
						href='/icons/apple/splash/640x1136.png'
						sizes='640x1136'
					/>

					<link
						href='https://fonts.googleapis.com/css?family=Roboto:300,400,500|Rubik:500,700,400,300&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
