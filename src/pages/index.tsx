import Head from 'next/head'
import type { NextPage } from 'next'

import Banner from '../components/home/banner'
import AboutSection from '../components/home/about-txt'
import GithubSection from '../components/home/github'
import Footer from '../components/footer'

const Home: NextPage = () => {
return (
  <>
    <Head>
      <title>Pavko design and web development portifolio</title>
      <meta name="keywords" content="Html, css, javascript, react, nodejs, developer, front-end, web, design, pixel, perfect, freelancer"></meta>
      <meta name="description" content="Pavko's portifolio of web deveplopment, focused on responsive design, using the best UI and UX prectices"></meta>
    </Head>
    <Banner />
    <AboutSection />
    <GithubSection />
    <Footer />
  </>
  )
}

export default Home