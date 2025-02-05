import React from 'react'
import Icon from 'react-icons-kit'
import {apple, android, windows} from 'react-icons-kit/fa'
import { Fade } from 'react-reveal'
import Lottie from "lottie-react";
import fast from "./lotties/lottie.json"

function ThirdPage() {
  return (
    <div id='learn' className='flex flex-col w-screen h-96 p-10 items-center justify-center text-purple-400 bg-purple-950 scroll-smooth'>
        <div className='flex flex-col w-[40%] items-center justify-center gap-4'>
        <Lottie animationData={fast} className='absolute z-0 w-[40%] opacity-20 hue-rotate-90'/>

            <Fade right>
                <h1 className='text-2xl text-white'>دانلود اپلیکیشن ما</h1>
            </Fade>
            <hr className='h-2 text-white w-full'/>
            <Fade left>
                <p>اپلیکیشن ما را می توانید در همه پلتفرم ها داشته باشید</p>
            </Fade>
                <Fade bottom cascade>
                    <div className='*:p-2 *:px-12 *:rounded-md space-x-3 *:duration-300 *:border-white *:border-2 hover:*:bg-white hover:*:text-purple-950'>
                            <button><Icon icon={apple}/>آیفون</button>
                            <button><Icon icon={android}/>اندروید</button>
                            <button><Icon icon={windows}/>ویندوز</button>
                    </div>
                </Fade>
        </div>
    </div>
  )
}

export default ThirdPage