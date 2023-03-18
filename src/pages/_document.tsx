import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="es-co" translate="no">
      <Head>
        <link rel="icon" href="/icon.png" sizes="32x32" />
      </Head>
      <body className="font-inter antialiased bg-slate-100 text-slate-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
