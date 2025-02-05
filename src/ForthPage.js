import React from 'react'
import Icon from 'react-icons-kit'
import { facebook, twitter, youtube, twitch } from 'react-icons-kit/fa'
import { Fade } from 'react-reveal'

function ForthPage() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full bg-fixed bg-[url(./images/15.jpg)] bg-cover z-10'>
          <div className='flex flex-col justify-center items-center w-[60%] h-[50%] rounded-md space-y-10 backdrop-blur-xl shadow-md'>
            <Fade left>
                <h1 className='text-2xl text-white'>!حالا مشترک شوید</h1>
            </Fade>
              <div className='flex flex-row w-[38%] h-auto gap-2 justify-center' dir='rtl'>
                <Fade right>
                  <button className='basis-1/4 p-3 shadow-md shadow-black active:shadow-none text-white rounded-md border-2 border-white hover:bg-purple-950 hover:text-white duration-150'>ارسال</button>
                  <input type='email' className='basis-3/4 rounded-md  bg-transparent p-2 border-2 border-white text-white' placeholder='ایمیل خود را وارد کنید ...' />
                </Fade>
              </div>
              <Fade bottom cascade>
                <ul className='flex flex-row w-[80%] *:text-white space-x-3 justify-center items-center hover:*:text-white *:duration-300 *:cursor-pointer *:rounded-md *:border-2 *:border-white *:p-2 *:px-12 hover:*:bg-purple-950'>
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