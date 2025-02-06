import React from 'react'
import {bookmark} from 'react-icons-kit/oct/bookmark'
import Icon from 'react-icons-kit'
import Lottie from "lottie-react";
import fast from "./lotties/fast.json"
import { Fade } from 'react-reveal';
import {threeDCube,chat,key,sunshine} from 'react-icons-kit/metrize'

function SecondPage() {
  return (
    <div id='home' className='flex flex-col w-screen h-screen justify-center items-center bg-[#F8E7F6] space-y-4 z-10 snap-y snap-mandatory scroll-smooth'>

          <div className='flex flex-col justify-center items-center snap-center snap-always'>
              <div className='flex flex-col justify-center items-center mb-10 space-y-3'>
                  <Icon icon={bookmark} size={52} className='text-purple-900 z-50 animate-bounce'/>
                <Fade left>
                  <h1 className='text-3xl z-10 text-purple-950'>ویژگی های اصلی</h1>
                </Fade>
                <Fade bottom>
                  <p className='w-[80%] text-center text-gray-800 z-10'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </Fade>
              </div>

              <div className='flex flex-row relative justify-center items-center w-[70%] h-auto z-30'>
                <div className='flex flex-row justify-center items-center w-full'>
                  <Fade right>
                    <div className='flex flex-col items-center justify-center space-y-3 cursor-pointer hover:*:-translate-x-6 *:duration-500' dir='rtl'>
                        <div className='flex flex-row'>
                          <Icon icon={threeDCube} size={52} className='ml-4 text-purple-400'/>
                          <div className='flex flex-col'>
                            <h3 className='text-xl text-indigo-800'>طراحی مدرن و منحصر به فرد</h3>
                            <p className='text-sm text-gray-700'>یک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط</p>
                          </div>
                        </div>
                        <div className='flex flex-row'>
                          <Icon icon={key} size={52} className='ml-4 text-purple-400'/>
                          <div className='flex flex-col'>
                            <h3 className='text-xl text-indigo-800'>رنگ بندی کاربر پسند</h3>
                            <p className='text-sm text-gray-700'>یسطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی</p>
                          </div>
                        </div>
                        <div className='flex flex-row'>
                          <Icon icon={chat} size={52} className='ml-4 text-purple-400'/>
                          <div className='flex flex-col'>
                            <h3 className='text-xl text-indigo-800'>ریسپانسیو</h3>
                            <p className='text-sm text-gray-700'>یایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                          </div>
                        </div>
                        <div className='flex flex-row'>
                          <Icon icon={sunshine} size={52} className='ml-4 text-purple-400'/>
                          <div className='flex flex-col'>
                            <h3 className='text-xl text-indigo-800'>بسیار سبک و کم حجم</h3>
                            <p className='text-sm text-gray-700'>یک است. چاپگرها و متون بلکه روزنامه و مجله طراحان گرافیک است. چاپگه لازم است و برای شرایط</p>
                          </div>
                        </div>
                    </div>
                  </Fade>
                </div>
                <div className='flex w-[30%] justify-center items-center'>
                <Lottie animationData={fast} className='absolute z-0 w-full opacity-80'/>

                  <Fade left>
                    <img src={require('./images/phone3.png')}/>
                  </Fade>
                </div>
              </div> 
          </div>
           
        </div>
  )
}

export default SecondPage