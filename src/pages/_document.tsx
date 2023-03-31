import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="es-co" translate="no">
      <Head>
        <link rel="icon" href="/icon.png" sizes="32x32" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
