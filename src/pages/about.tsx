

import Head from 'next/head'
import type { NextPage } from 'next'
import Name from 'src/components/about/name'
import Experience from 'src/components/about/somexp'
import Organized from 'src/components/about/organized'
import AwesomeTools from 'src/components/about/awesometools'
import Teamwork from 'src/components/about/teamwork'
import Principles from 'src/components/about/principles'
import Footer from 'src/components/footer'
import AboutHelp from 'src/components/about/abouthelp'

import styles from './tempfile.module.scss'

const Home: NextPage = () => {
return (
  <>
    <Head>
      <title>About Pavko path and field of Front-end development</title>
      <meta name="keywords" content="Html, css, javascript, react, nodejs, developer, front-end, web, design, pixel, perfect, freelancer"></meta>
      <meta name="description" content="The page talks about the path and the field to become a front-end developer."></meta>
    </Head>

    <Name />
    <Experience />
    <Organized />
    <AwesomeTools />
    <Teamwork />
    <Principles />
    <AboutHelp />
    <Footer />

    <div className={styles.notResponsiveYet}>
      <h1>Sorry, this page isn&apos;t responsive yet</h1>
      <h1>But you can see it in any mobile!</h1>
      <a href="/">Back to home</a>
    </div>
  </>
  )
}

export default Home