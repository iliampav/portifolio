import Head from 'next/head'
import Link from 'next/link'
import type { NextPage } from 'next'
import Name from 'src/components/about/name'
import Experience from 'src/components/about/somexp'
import Organized from 'src/components/about/organized'
import AwesomeTools from 'src/components/about/awesometools'

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
  </>
  )
}

export default Home