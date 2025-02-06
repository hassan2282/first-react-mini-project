import React, { useState } from 'react';
import Icon from 'react-icons-kit';
import { book, plus } from 'react-icons-kit/fa';
import { Fade } from 'react-reveal';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='download' className='flex flex-row relative justify-between p-2 items-start border-white z-20 border-2 rounded-md bg-black before:-z-10 text-white before:contents[""] before:absolute before:inset-0 before:bg-purple-800 before:blur-sm'>
      <div className='flex flex-col space-y-5 overflow-hidden justify-center items-start'>
        <li className=''>{question}</li>
        <p className={`${isOpen ? 'h-14' : 'h-0'} duration-300`}>{answer}</p>
      </div>
      <Icon
        icon={plus}
        size={40}
        className='cursor-pointer hover:text-purple-600 duration-100 animate-spin'
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

function FifthPage() {
  const faqItems = [
    {
      question: 'چرا از پیامرسان شما باید استفاده کنم ؟',
      answer: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    },
    {
      question: 'این همه سایت چرا سایت شما ؟',
      answer: 'لمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده است',
    },
    {
      question: 'آیا سودی برام توی این کار هست ؟',
      answer: 'از صنعت چاپ و با استفاده از طراحان  از صنعت چاپ و با استفاده از طراحان لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  گرافیک است',
    },
  ];

  return (
      <Fade bottom>
    <div className='flex flex-col w-screen h-[40rem] bg-white text-black items-center justify-center'>

      <div className='flex flex-col w-[50%] h-auto items-center justify-center space-y-6'>
        <Icon icon={book} size={40} className='text-purple-950' />
        <h1 className='text-3xl text-gray-600'>سوالات متداول</h1>
        <p className='text-center text-purple-950'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
        <ul className='flex flex-col w-full space-y-4' dir='rtl'>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer}/>
          ))}
        </ul>
      </div>
    </div>
          </Fade>
  );
}

export default FifthPage;