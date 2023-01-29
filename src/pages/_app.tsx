import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Halant } from '@next/font/google';
import { TopBar } from '@/components/TopBar/TopBar.component';

const halant = Halant({subsets: ['latin'], weight: ['300', '400', '500']});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={halant.className}>
    <Component {...pageProps} />
    </main>
  );
}
