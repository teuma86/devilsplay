import '../styles/globals.scss'
import GeneralLayout from '../components/Layout/GeneralLayout'

function MyApp({ Component, pageProps }) {
  return (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
  );
}

export default MyApp
