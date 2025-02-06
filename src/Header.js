import React from 'react'

function Header() {
  return (
    <div className='relative flex flex-row justify-around items-center w-full z-30 h-16 mt-2 scroll-smooth' dir='rtl'>
        <ul className='flex flex-row scroll-smooth *:cursor-pointer hover:*:text-indigo-300 hover:*:scale-105 *:duration-300 *:p-4 *:rounded-md text-[#F5F5F5]'>
            <li className='border-white border-2'><a href='#learn'>آموزش بیشتر</a></li>
            <li><a href='#home'>خانه</a></li>
            <li><a href='#features'>امکانات</a></li>
            <li><a href='#download'>دانلود</a></li>
            <li><a href='#footer' className='scroll-smooth'>مشترک شوید</a></li>
        </ul>
        <div>
           <img src={require('./images/logo.png')} className='w-40' /> 
        </div>
    </div>
  )
}

export default Header