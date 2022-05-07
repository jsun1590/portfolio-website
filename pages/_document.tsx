import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="text-black transition-colors bg-white dark:bg-neutral-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
