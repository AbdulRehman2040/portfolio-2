import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MdDownloadForOffline } from "react-icons/md";
const Navbar = () => {
  return (
    <div className='bg-zinc-200 z-50 sticky top-0'>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2.5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/assects/picture/logo.png")} alt="logo"  className='w-[55px]' />
      <span className="ml-3 text-xl">PORFOLIO WEB</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-blue-600">About</Link>
      <Link href={"#skill"} className="mr-5 hover:text-blue-600">Skills</Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-600">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-blue-600">Contacts</Link>
    </nav>
      <a href="/assects/CV/myCV.pdf">
    <button  className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
      Download CV
      <MdDownloadForOffline className="text-xl ml-2.5"/>
    </button>
      </a>
  </div>
</header> 
    </div>
  )
}

export default Navbar