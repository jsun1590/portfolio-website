import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import NavBar from "@components/Sections/NavBar";
import Footer from "@components/Sections/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
