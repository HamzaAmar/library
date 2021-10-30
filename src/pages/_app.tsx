import '../styles/globals.css';
import 'keen-slider/keen-slider.min.css';
import type { AppProps } from 'next/app';
import { UIContext } from '@components/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContext>
      <Component {...pageProps} />
    </UIContext>
  );
}
export default MyApp;
