import React from 'react'

function Cover() {
  return (
    <div className='flex flex-row relative w-[70%] justify-around items-center rounded-md z-20'>
        <img src={require('./images/phone.png')} className='w-[50%] h-[90%] opacity-[98%]' />
        <div className='flex flex-col relative flex-wrap h-full overflow-hidden bg-purple-950 bg-opacity-20 items-start py-24 text-white p-3 rounded-lg before:contents-[" "] before:rounded-md before:absolute before:inset-1 before:-z-10 before:filter before:backdrop-blur-md' dir='rtl'>
            <div className='flex flex-col flex-wrap items-start text-[2.5rem]'>
                <h1>پیشرو در سطح جهانی</h1>
                <h1>امنیت در همه پلتفرم ها</h1>
                <h1>سیستم پیامرسانی</h1>
            </div>
            <hr className='h-2 w-[40%] my-3 text-white'/>
            <p className='text-white text-sm'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>

            <div className='flex flex-row mt-4 items-center justify-center *:cursor-pointer *:shadow-md *:shadow-purple-950 hover:*:scale-95 hover:*:bg-[#37154e] *:duration-300 hover:*:shadow-none hover:*:text-white'>
                <button className='p-2 m-3 border-2 border-white rounded-md text-white'>بیاین شروع کنیم</button>
                <button className='p-2 m-3 border-2 border-white rounded-md bg-[#F8E7F6] text-purple-950'>چجوری کار می کنیم</button>
            </div>
        </div>
    </div>
  )
}

export default Cover