import Footer from '../../components/footer/Footer'
import Categories from '../../components/home/categories/Categories'
import Intro from '../../components/home/Intro/Intro'
import HowSection from '../../components/home/howSection/HowSection'
import WhySection from '../../components/home/whySection/WhySection'
import './home.css'
import OurServices from '../../components/home/categories/OurServices'

const Home = () => {
  return (
    <div className='homeContainer'>
      <Intro />
      {/* <Categories /> */}
      <OurServices/>
      <WhySection />
      <HowSection />
    </div>
  )
}

export default Home