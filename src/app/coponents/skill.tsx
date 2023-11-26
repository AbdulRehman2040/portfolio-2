import React from 'react'
import {AiOutlineCheckSquare} from "react-icons/ai"

const Skill = () => {
  return (
    <div id='skill' className='bg-lime-100'>
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-3xl text-black tracking-widest font-medium title-font mb-1 p-0 underline">
        SKILLS
      </h2>
      <h1 className="sm:text-xl text-2xl font-medium title-font text-blue-500">
        My Skills:
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
       {/* skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[98%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right '>98%</p>
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[85%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right '>85%</p>
          </div>
        </div>
      </div>
      {/* skill */} 
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript/TypeScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[90%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right '>90%</p>
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              NEXT js
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[75%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right '>75%</p>
          </div>
        </div>
      </div>
      {/* skill */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3 ">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              PYTHON
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[80%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right '>80%</p>
          </div>
        </div>
      </div>
        {/* skill */}
        <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
             <AiOutlineCheckSquare className="text-xl font-bold" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Sharp C++
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
                <div className='absolute bg-blue-500 h-1 rounded-xl w-[78%]'></div>
            </div>
            <p className='font-bold text-blue-500 text-right '>78%</p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>
 
    </div>
  )
}

export default Skill