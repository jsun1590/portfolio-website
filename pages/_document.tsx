import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en" translate="no">
      <Head />
      <body className="text-black bg-white dark:bg-neutral-800 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
