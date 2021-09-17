import "../styles/global.scss"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Personal Site</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp