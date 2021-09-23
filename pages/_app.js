import 'tailwindcss/tailwind.css'
import Headers from '../components/Headers'
import Footer from '../components/Footer'

import '../styles/global.css';

import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';


const progress = new ProgressBar({
  size:4,
  color:'#FE595E',
  className:'z-50',
  delay:100

})

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Headers />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
