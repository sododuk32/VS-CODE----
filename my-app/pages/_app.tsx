import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
    type Product = {
        id: string;
        name: string;
        price: string;
        imgName: string;
        count: number;
    };
    return (
        <CookiesProvider>
            <Component {...pageProps} />;
        </CookiesProvider>
    );
}

export default MyApp;
