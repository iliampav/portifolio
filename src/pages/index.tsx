import type { NextPage } from 'next'
import Astro from '../components/banners/banner-astro'
import Cafe from '../components/banners/banner-cafe'

const Home: NextPage = () => {
  return (
    <div>
      <Astro />
    </div>
  )
}

export default Home
