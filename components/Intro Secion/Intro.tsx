import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <section className='flex flex-col-revers gap-x-10 my-8 gap-y-4 pb-24'>
        <div className='flex-1'>
        <h1 className='title'>Hey, I&#39;m Asadullah</h1>
        <p className='my-5'>I&#39;m  dedicated MERN Stack Developer with over 1 year of professional experience in building dynamic and high-performance web applications. Currently, I work at Code Batch Soft Solutions, where I specialize in crafting responsive, user-friendly websites and robust backend solutions.</p>
        </div>
        <div className=''>

      <Image src={'/images/image.png'} className='flex-1 rounded-lg' width={175} height={175} alt='Asadullah Amjad' priority />
        </div>
    </section>
  )
}

export default Intro;
