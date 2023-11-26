import Link from 'next/link';
import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-slate-950'>
        <footer className="text-gray-600 ">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assects/picture/logo.png")} alt="logo"  className='w-[55px]' />
      <span className="ml-3 text-xl text-white ">Portfolio Web</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023 Portfolio Website 
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <Link href={"https://www.facebook.com/campaign/landing.php?campaign_id=1653377901&extra_1=s%7Cc%7C358050429110%7Ce%7Cfacebook%27%7C&placement=&creative=358050429110&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1653377901%26adgroupid%3D65139789042%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1011081%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMqlNDQJsJAd927buL2qk3S00hSVv0EgSYvHIBCd2hOl1Np5JlLWZaYaAqOWEALw_wcB"}
         
         target="_blank"
      className="text-gray-500"
      >
      <FaSquareFacebook className="text-2xl hover:text-[#003cffee]"/>
      </ Link>
      
      <a className="ml-3 text-gray-500">
      <Link href={"https://www.linkedin.com/checkpoint/lg/login-challenge-submit?lastCv=AgHHvREzga8NDgAAAYvuBr-2hvUvpJo1tSMq8IsmNtNA3fwMn23aqp3Qato&_d=d&vcd=AgHnEuq8afwYngAAAYvuBv0QdxxFZG6feVGzkuYXcziebVupo1sHkftwi45h2hsZFqL39PNtBLGoJZALfr0oYgYfYO7sZg&pageInstance=urn%3Ali%3Apage%3Ad_checkpoint_ch_captchaV2Challenge%3BhPHtrr8HSSijL7K2sERwIw%3D%3D&controlId=d_checkpoint_ch_captchaV2Challenge-Submit&ut=0SKrnYwS3-tr01"}
         
         target="_blank"
      className="text-gray-500"
      >
      <FaLinkedin className="text-2xl hover:text-[#4400ffee]"/>
      </ Link>



      </a>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer