import Head from 'next/head'
import Image from 'next/image'
import HorizontalSlider from '../components/HorizontalSlider'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={`container ${styles.container}`}>
      <Head>
        <title>Horizontal Slider Demo</title>
        <meta name="description" content="A demo of a cool horizontal slider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}
        <HorizontalSlider text={"HOLA CAPO"} speed={0.1} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.1} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.2} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.2} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.3} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.3} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.4} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.4} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.5} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.5} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.6} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.6} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.7} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.7} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.8} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.8} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.9} direction={'right'} />
        <HorizontalSlider text={"HOLA CAPO"} speed={0.9} />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
