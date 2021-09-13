import "../styles/global.scss"


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