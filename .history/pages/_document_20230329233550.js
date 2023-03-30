import { Html, Head, Main, NextScript } from "next/document";
import { Montserrat } from "next/font/google";

const montserrat = () => ({
  weight: [400, 500, 600, 700],
  subsets: ["latin"],
});

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com" />
        <link href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" />
      </Head>
      <body className={`${montserrat} h-full`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
