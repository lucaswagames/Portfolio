import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/layout.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  ); 
}
