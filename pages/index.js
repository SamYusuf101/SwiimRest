import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Yusuf | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  )
}
