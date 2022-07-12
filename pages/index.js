/* eslint-disable */
import Head from 'next/head';
import About from '../components/About';
import Body from '../components/Body';
import Contacts from '../components/Contacts'

import Projects from '../components/projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Yusuf | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Body/>
      <About />
      <Skills />
      <Projects />
      <Contacts />
      
    </div>
  )
}
