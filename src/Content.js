import React from 'react'
import Cover from './Cover'
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

function Content() {
  return (
    <div className='flex flex-col justify-center items-center z-20 mt-20 overflow-hidden'>
      <div className='flex flex-col justify-center items-center w-screen h-screen overflow-hidden'>
        <video autoPlay muted loop className='absolute w-[100%] top-0 h-auto z-0'>    
          <source src={require('./vid/2.mp4')} type="video/mp4"></source>  
        </video>
          <Cover/>
      </div>
          <SecondPage />
          <ThirdPage />
    </div>
  )
}

export default Content