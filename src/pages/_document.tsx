import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
render() {
return ( <Html lang="en">

<Head>
    <link rel="preconnect" href="https://fonts.googleapis.com/" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />

    <meta charSet="UTF-8" />
    <meta name="author" content="Iliam Ferreira Pavkovic"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Head>

<body>
    <Main />
    <NextScript />
</body>

</Html>
) } }