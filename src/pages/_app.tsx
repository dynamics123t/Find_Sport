import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout/Layout";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { useCallback, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import NoneLayout from "@/components/Layout/NoneLayout";
const noneheaderpathname = [
  "/auth/login",
  "/auth/signup",
  "/auth/forgotpassword",
  "/auth/verifycode",
  "/admin/dashboard",
  "/admin/sportmanagement",
  "/admin/contacuser",
];

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const getLayout = useCallback(() => {
    if (noneheaderpathname.includes(pathname)) return NoneLayout;

    return Layout;
  }, [pathname]);
  const AppLayout = getLayout();
  return (
    <>
      <Provider store={store}>
        <AppLayout>
          <Toaster />
          <Component {...pageProps} />;
        </AppLayout>
      </Provider>
    </>
  );
}
