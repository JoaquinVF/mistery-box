import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import boxesStyles from '@/styles/boxes.module.css';
import Navbar from './components/NavBar'
import CardBox from './components/CardBox';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Enigma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Navbar />
        <main className={styles.main}>
          <h2 className={styles.mainText}>BOXES</h2>

          <div className={boxesStyles.cardBoxsContainer}>
            <CardBox title="Mystery Box 1" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 2" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 3" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 4" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 5" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 6" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 7" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 8" imageSrc="/box.png" price="$19.99" />  
            <CardBox title="Mystery Box 9" imageSrc="/box.png" price="$19.99" />  
          </div>
        </main>
      </div>
    </>
  )
}
