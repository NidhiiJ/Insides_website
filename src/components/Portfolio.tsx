import React from 'react';
import ImageCard from './ReusableComponents/ImageCard'

const projects = [
  {
    // image : '/img_card1.jpg',
    image : '/ourprocess-img.jpg',
    title: 'PROJECT1',
    description:'yo wassupyo wassup',
    paddingTop: true
  },
  {
    image : '/img_card2.jpg',
    title: 'PROJECT2',
    description:'yo wassup',
    paddingTop: false
  },
  {
    image : '/img_card3.jpg',
    title: 'PROJECT3',
    description:'yo wassup',
    paddingTop: true
  },
  {
    image : '/img_card4.jpg',
    title: 'PROJECT4',
    description:'yo wassup',
    paddingTop: false
  },
  {
    image : '/img_card5.jpg',
    title: 'PROJECT5',
    description:'yo wassup',
    paddingTop: true
  },
  {
    image : '/img_card6.jpg',
    title: 'PROJECT6',
    description:'yo wassup',
    paddingTop: false
  },
]



interface PortfolioProps {
  windowSize: number;
}

const Portfolio: React.FC<PortfolioProps> = ({windowSize}) => {

  return (
    <div id='portfolio' className=''>
      <div className='md:flex flex-row gap-3 items-center justify-around px-4 pb-5 md:pb-15'>
        <div className='flex flex-col items-center md:items-start '>
          <div className='text-[15px]'>INSIDE'S</div>
          <div className="text-[32px] md:text-[43px] lg:text-[54px] font-Maharlika">Portfolio</div>
        </div>
        <div className=' hidden md:block w-[368px] text-[14px]'>
          It's about creating unique, inviting spaces that tell your story.  Whether you're redesigning a single room or embarking on a complete
          home makeover, our team of expert designers is here to bring your vision to life.
        </div>
        <div className='flex flex-col items-center'>
          {/* use this button as a component */}
          <button className='border border-white rounded-full py-2 px-8 font-inter flex flex-row items-center font-[600] max-md:mt-5'>
            <span className='pr-4 text-[12px] md:text-[16px]'>VIEW ALL PROJECTS</span>
            <img src='/arrow.png' alt='arrow img'/> 
          </button>
        </div>
      </div>
      <div className='p-5 grid grid-flow-col overflow-x-auto'>
        {windowSize <= 768
        ? projects.slice(0,4).map((x,index)=> <ImageCard  key={index} windowSize={windowSize} paddingTop={false} imagePath={x.image} title={x.title} description={x.description}/>)
        : projects.map((x,index)=> <ImageCard key={index} windowSize={windowSize} paddingTop={x.paddingTop} imagePath={x.image} title={x.title} description={x.description}/>)
        }
      </div>
    </div>
  )
}

export default Portfolio