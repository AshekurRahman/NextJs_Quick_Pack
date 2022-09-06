import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar, Footer } from './Common'
import { About, Header } from './Home'

export default function Home() {
  return (
    <div className={styles.app__wrapper}>
      <Head>
        <title>Quinn - Personal Portfolio NextJs Template</title>
        <meta name="description" content="Best Personal Portfolio NextJs Website Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.app__main}>
        <Navbar />
        <Header />
        <About />
        <Footer />
      </main>
    </div>
  )
}
