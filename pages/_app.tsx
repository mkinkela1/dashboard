import type { AppProps } from "next/app";

interface IAppProps {
  currentUser: Object;
}

function App({ Component, pageProps, currentUser }: AppProps & IAppProps) {
  return <Component {...pageProps} />;
}

export default App;
