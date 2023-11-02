import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Toast from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Toast /> */}
      <Component {...pageProps} />;
    </>
  );
}
