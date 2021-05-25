import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
        options={{ showSpinner: false }}
      />
    </>
  )
  
}

export default MyApp
