import '../styles/globals.css'
import Layout from '../components/Layout'; 
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#FF0000"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  ) 
}

export default MyApp
