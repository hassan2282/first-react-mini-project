import React from 'react'
import { Fade } from 'react-reveal'

function Footer() {
  return (
    <div id='footer' className='scroll-smooth flex flex-row items-center justify-center bg-purple-950 text-purple-200 w-full text-sm h-80 p-5' dir='rtl'>
      <Fade bottom cascade>
        <div className='flex flex-row w-[70%] h-full justify-around items-center'>

          <div>
            <ul className='flex flex-col space-y-1 hover:*:scale-110 cursor-pointer hover:*:text-gray-400'>
              <h3 className='text-xl'>لینک های مفید</h3>
              <li>پشتیبانی</li>
              <li>درباره ما</li>
              <li>آموزش</li>
              <li>هاستینگ</li>
              <li>پیام رسان</li>
            </ul>
          </div>

          <div>
              <ul className='flex flex-col space-y-1 hover:*:scale-110 cursor-pointer hover:*:text-gray-400'>
                <h3 className='text-xl'>پشتیبانی</h3>
                <li>درباره</li>
                <li>درباره ما</li>
                <li>آموزش</li>
                <li>هاستینگ</li>
                <li>پیام رسان</li>
              </ul>
          </div>
          <div>
            <ul className='flex flex-col space-y-1 '>
              <h3 className='text-xl'>ارتباط با ما</h3>
              <li>آدرس : دهدشت کوی ازادگان 1</li>
              <li>تلفن : 09170240000</li>
              <li>فکس : 09170240000</li>
              <li>ایمیل : taghavey.hassan@gmail.com</li>
              <li>وب سایت : www.websima.com</li>
            </ul>
          </div>
            
            <div className='flex flex-col items-start'>
              <img src={require('./images/logo.png')} className='w-80 animate-bounce'/>
              <p>Copyright 2024, websima.com</p>
            </div>
        </div>
      </Fade>
    </div>
  )
}

export default Footer