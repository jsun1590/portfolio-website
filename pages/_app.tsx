import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NavBar from "@components/Utils/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
