import Head from 'next/head'
import type { NextPage, InferGetStaticPropsType, GetStaticProps} from 'next'
import Banner from '../components/home/banner'
import AboutSection from '../components/home/about-txt'
import GithubSection from '../components/home/github'
import Projects from '../components/home/projectsection'
import Footer from '../components/footer'
import { useEffect } from 'react'
// import variables from '../styles/variables.scss';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.figma.com/v1/files/xMe62wiqPcyXXx3uzvlugV/nodes?ids=502%3A2', {
    method: 'GET', 
    headers: {
      'X-FIGMA-TOKEN': 'figd_tqUG6w-J8ykrV3nk-gTy3YogDv6lVepYvW-jIY8B'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
  const colors = await res.json()

  return {
    props: {
      colors,
    },
  }
}

const Home: NextPage = ({colors}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const colorsObj = colors.nodes['502:2'].document.children
  console.log(colors.nodes['502:2'].document.children)

  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue('--marine-blue');
    console.log(`--color-logo: ${color}`);
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="author" content="Iliam Ferreira Pavkovic"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pavko design and web development portifolio</title>
        <meta name="keywords" content="Html, css, javascript, react, nodejs, developer, front-end, web, design, pixel, perfect, freelancer"></meta>
        <meta name="description" content="Pavko's portifolio of web deveplopment, focused on responsive design, using the best UI and UX prectices"></meta>
      </Head>
      <Banner />
      <AboutSection />
      <Projects />
      <GithubSection />
      <Footer />
    </>
    )
  }

export default Home