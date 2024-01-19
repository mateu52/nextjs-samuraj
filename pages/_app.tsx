import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nextnx!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
import { AppProps } from 'next/app';
import Layout from 'nextapp/components/Layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Component {...pageProps} />
        <p>Site by Mateusz Walter</p>
    </Layout>
  );
}

export default CustomApp;
import Footer from './Footer'
export default function Layout({children}){
    return(
        <>
            {children}
            <Footer />
        </>
    )
}
