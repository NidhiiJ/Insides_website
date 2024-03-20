
import ContactUs from '../components/ContactUs'
import OurProcess from '../components/OurProcess'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import WhoAreWe from '../components/WhoAreWe'
import  WhyUs  from '../components/WhyUs'
import HeroSection from '../components/HeroSection'

interface HomeProps {
  windowSize : number
}

const Home:React.FC<HomeProps> = ({windowSize}) => {

  return (
    <div id='home'  className='flex flex-col gap-14 md:gap-40 '>
      <HeroSection/>
      <WhoAreWe/>
      <OurProcess/>
      <WhyUs/>
      <Portfolio windowSize={windowSize}/>
      <Testimonials  windowSize={windowSize}/>
      <ContactUs/>
    </div>
  )
}

export default Home