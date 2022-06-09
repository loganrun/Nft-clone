import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Intro from '../components/Home'
import About from '../components/About'
import Showcase from '../components/Showcase'

const Home: NextPage = () => {
  return (
    
<div>
  <Head>
    <title>BigHead</title>
  </Head>
    <Header/>
  <main>
    <Intro/>
    <About/>
    <Showcase/>

  </main>
</div>
    
  )
    
}

export default Home
