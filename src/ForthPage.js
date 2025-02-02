import React from 'react'
import Icon from 'react-icons-kit'
import { facebook, twitter, youtube, twitch } from 'react-icons-kit/fa'
import { Fade } from 'react-reveal'

function ForthPage() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-96 overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-fixed bg-[url(./images/6.jpg)] bg-cover backdrop-blur-xl z-10 space-y-10'>
        <Fade left>
            <h1 className='text-2xl text-white'>!حالا مشترک شوید</h1>
        </Fade>
            <div className='flex flex-row w-[40%] h-auto gap-1' dir='rtl'>
              <Fade right>
                <button className='basis-1/4 p-2 text-white rounded-md bg-transparent backdrop-blur-lg border-2 border-white hover:bg-white hover:text-indigo-950 duration-300'>مشترک شدن</button>
                <input type='text' className='basis-3/4 rounded-md p-2 border-2 border-white backdrop-blur-xl bg-transparent text-white' placeholder='ایمیل خود را وارد کنید ...' />
              </Fade>
            </div>
            <Fade bottom cascade>
              <ul className='flex flex-row w-[80%] *:text-white space-x-3 justify-center items-center hover:*:text-indigo-950 *:duration-300 *:cursor-pointer *:rounded-md *:border-2 *:border-white *:p-2'>
                  <li><Icon icon={facebook} size={40}/></li>
                  <li><Icon icon={twitter} size={40}/></li>
                  <li><Icon icon={youtube} size={40}/></li>
                  <li><Icon icon={twitch} size={40}/></li>
              </ul>
            </Fade>
        </div>
    </div>
  )
}

export default ForthPage