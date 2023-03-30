import { Html, Head, Main, NextScript } from "next/document";
import { Montserrat } from "next/font/google";

const montserrat = () => ({
  weight: [400, 500, 600, 700],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className={`${montserrat} h-full`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
