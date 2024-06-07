import "@/styles/globals.css";
import LayoutRoot from "./components/layout/LayoutRoot";

export default function App({ Component, pageProps }) {
  return (
    <LayoutRoot>
      <Component {...pageProps} />
    </LayoutRoot>
  );
}
