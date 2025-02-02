import React from 'react'
import Icon from 'react-icons-kit'
import { facebook, twitter, youtube, twitch } from 'react-icons-kit/fa'
import { Fade } from 'react-reveal'

function ForthPage() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-96 overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-fixed bg-[url(./images/6.jpg)] bg-cover z-10 '>
          <div className='flex flex-col justify-center items-center w-full h-full rounded-md space-y-10 backdrop-blur-xl'>
            <Fade left>
                <h1 className='text-2xl text-white'>!حالا مشترک شوید</h1>
            </Fade>
              <div className='flex flex-row w-[38%] h-auto gap-2 justify-center' dir='rtl'>
                <Fade right>
                  <button className='basis-1/4 p-2 shadow-md shadow-gray-600 active:shadow-none text-white rounded-md bg-transparent backdrop-blur-lg border-2 border-white hover:bg-white hover:text-indigo-950 duration-150'>مشترک شدن</button>
                  <input type='email' className='basis-3/4 rounded-md p-2 border-2 border-white backdrop-blur-xl bg-transparent text-white' placeholder='ایمیل خود را وارد کنید ...' />
                </Fade>
              </div>
              <Fade bottom cascade>
                <ul className='flex flex-row w-[80%] *:text-white space-x-3 justify-center items-center hover:*:text-indigo-950 *:duration-300 *:cursor-pointer *:rounded-md *:border-2 *:border-white *:p-2 *:px-12'>
                    <li><Icon icon={facebook} size={40}/></li>
                    <li><Icon icon={twitter} size={40}/></li>
                    <li><Icon icon={youtube} size={40}/></li>
                    <li><Icon icon={twitch} size={40}/></li>
                </ul>
              </Fade>
          </div>
        </div>
    </div>
  )
}

export default ForthPage