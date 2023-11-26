"use client"
import React from 'react'
import Image from 'next/image'
import Typewrter from "typewriter-effect"
import Link from 'next/link'
const Hero = () => {
  return (
    
        <section className="text-gray-600 body-font bg-green-100 ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am
        <br className="hidden lg:inline-block" />
        <Typewrter
  options={{
    strings: ['Web Developer', 'UI/UX Designer','Student','Pakistani'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed">
       My name is ABDUL REHMAN. I am Student
       in PIAIC. I am 16 year old I have a 
       seven month experience in web development
       I create many project in  JAVA script,
       TypeScript and Modern Python as given 
       in project page
       I start Web Development in ...
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center rounded mx-auto  w-[18rem]"
        alt="hero"
  //  width={500}
  //   height={500}
        src={require('../../../public/assects/picture/my.jpg')}

      />
    </div>
  </div>
</section>
  )
}

export default Hero