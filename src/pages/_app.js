import '@/styles/globals.css'
import '@/styles/home.scss'
import '@/styles/animateletter.scss'
import '@/styles/slider.scss'
import '@/styles/about.scss'
import '@/styles/layout.scss'
import '@/styles/contact.scss'
import '@/styles/portfolio.scss'
import Layout from '@/component/Layout/Layout';
export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  )
}




