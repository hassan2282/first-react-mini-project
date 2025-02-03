import React from 'react'
import Icon from 'react-icons-kit'
import {book} from 'react-icons-kit/fa/book'

function FifthPage() {
  return (
    <div className='flex flex-col w-screen h-[40rem] bg-zinc-900 items-center justify-center'>
        <div className='flex flex-col w-[50%] h-auto items-center justify-center space-y-6'>
        <Icon icon={book} size={40} className='text-white'/>
        <h1 className='text-3xl text-gray-300'>سوالات متداول</h1>
        <p className='text-center text-white'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
        
        </div>
    </div>
  )
}

export default FifthPage