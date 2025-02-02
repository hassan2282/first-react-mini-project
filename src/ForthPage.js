import React from 'react'

function ForthPage() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-96 overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-fixed bg-[url(./images/6.jpg)] bg-cover backdrop-blur-xl z-10'>
            <h1 className='text-xl mb-6'>!حالا مشترک شوید</h1>
            <div className='flex flex-row w-[40%] h-auto space-x-1'>
              <button className='basis-1/4 p-2 rounded-md bg-transparent backdrop-blur-lg border-2 border-white hover:bg-white hover:text-indigo-950 duration-300'>مشترک شدن</button>
              <input type='text' className='basis-3/4 rounded-md p-2 border-2 border-white backdrop-blur-xl bg-transparent' placeholder='ایمیل خود را وارد کنید ...' />
            </div>
            <ul className='flex flex-row w-[80%]'>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default ForthPage