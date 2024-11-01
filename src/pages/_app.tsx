import EmptyLayout from "@/components/Layout/EmptyLayout";
import { AppContextProvider } from "@/context/AppContextProvider";
import { AppPropsWithLayout } from "@/models";
import StoreProviders from "@/stores/StoreProvider";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <>
      <StoreProviders>
        <AppContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppContextProvider>
      </StoreProviders>
    </>
  );
}
