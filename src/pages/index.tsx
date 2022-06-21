import type { NextPage } from 'next'
import Astro from '../components/banners/banner-astro'
import Cafe from '../components/banners/banner-cafe'
import Cruze from '../components/banners/banner-sail'

const Home: NextPage = () => {
  return (
      <section>
        {/* <Astro /> */}
        {/* <Cafe /> */}
        <Cruze />
      </section>
  )
}

export default Home
