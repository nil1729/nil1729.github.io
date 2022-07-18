import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en-US'>
				<Head>
					<meta name='keywords' content='nil1729' />
					<meta httpEquiv='X-UA-Compatible' content='IE=7' />
					<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
					<meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
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
