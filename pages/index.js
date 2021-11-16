import Head from 'next/head'
import Image from 'next/image'
import HorizontalSlider from '../components/HorizontalSlider'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Input from '../components/Input'


export default function Home() {

  const [ userUserInputText, setUserInputText ] = useState('')
  const [ slideWidthOnChange, setSlideWidthOnChange ] = useState(0) 
 const handleInputText = (value) => {
    setUserInputText(value)
 }


  return (
    <div className={`container ${styles.container}`}>
      <Head>
        <title>Horizontal Slider Demo</title>
        <meta name="description" content="A demo of a cool horizontal slider" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        
        <Input handleInputText={handleInputText} userUserInputText={userUserInputText} />
        <HorizontalSlider slideWidthOnChange={slideWidthOnChange} text={userUserInputText} speed={0.1} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.1} />
        <HorizontalSlider text={userUserInputText} speed={0.2} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.2} />
        <HorizontalSlider text={userUserInputText} speed={0.3} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.3} />
        <HorizontalSlider text={userUserInputText} speed={0.4} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.4} />
        <HorizontalSlider text={userUserInputText} speed={0.5} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.5} />
        <HorizontalSlider text={userUserInputText} speed={0.6} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.6} />
        <HorizontalSlider text={userUserInputText} speed={0.7} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.7} />
        <HorizontalSlider text={userUserInputText} speed={0.8} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.8} />
        {/* <HorizontalSlider text={userUserInputText} speed={0.9} direction={'right'} />
        <HorizontalSlider text={userUserInputText} speed={0.9} /> */}

      </main>
    </div>
  )
}
