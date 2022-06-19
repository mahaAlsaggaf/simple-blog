import React from "react";
import {Input, Icon} from "reactstrap";
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';




export default function Footer() {
  return ( 
    <>
      <footer className="text-gray-600 body-font">
        <div className="bg-lightergray py-12">
          <div className="relative container mx-auto items-center ">
            <div className="flex flex-row justify-center items-center">
              <h2 className="text-black text-md md:ml-6 md:mt-0 mt-2 text-center">
                اشترك في القناة البريدية
              </h2>
            </div>
            <div className="flex flex-row justify-center items-center">
              <p className="text-gray text-sm md:ml-6 md:mt-0 mb-2 text-center">
                وكن أول من يعلم عن كل جديد في عالم التجارة الإلكترونية              
              </p>
            </div> 
            <div className="flex flex-row justify-center items-center">
                  <button className="inline-flex text-white bg-teal border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded-l-sm ">اشتراك</button>
                  <Input
                    placeholder="البريد الإلكتروني "
                    className="text-right inline-flex w-full md:w-2/6 bgw-full bg-opacity-50 rounded border border-none hover:ring-teal focus:ring-teal 
                    focus:border-orange text-xs py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  {/* <div className="py- bg-white"><GoMail size='18'/></div> */}
            </div>
          </div>
          </div>
          <div className="bg-white py-6">

          <div className="relative container mx-auto text-darkgray bg-white">
            {/* Flex container */}
            <div className="flex items-center justify-around">
              <div>
                <p className="text-darkgray hover:text-teal text-sm text-center sm:text-left"> 
                  <a href="#" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">الشروط والأحكام </a>
                </p>
              </div>
              
              <div className="space-x-6 md:flex items-center" >
                <div className="border-r-2 border-lightgray" >
                  <button className="mr-4 inline text-white bg-orange border-0 py-3 px-9 focus:outline-none hover:bg-teal rounded-md text-sm">كن كاتباً معنا</button> 
                </div>
                <div className=''>
                  <ul className="hidden md:flex">
                    <li className='rounded-full ring-1 ring-lightgray bg-lightergray hover:ring-gray hover:bg-white my-auto p-2 mx-1'><a className='text-secondary'> <GoMail size='16' /></a></li>
                    <li className='rounded-full ring-1 ring-lightgray bg-lightergray hover:ring-gray hover:bg-white my-auto p-2 mx-1'><a className='text-secondary'> <FiFacebook size='16' /></a></li>
                    <li className='rounded-full ring-1 ring-lightgray bg-lightergray hover:ring-gray hover:bg-white my-auto p-2 mx-1'><a className='text-secondary'> <FiInstagram size='16'/></a></li>
                    <li className='rounded-full ring-1 ring-lightgray bg-lightergray hover:ring-gray hover:bg-white my-auto p-2 mx-1'><a className='text-secondary'> <FiTwitter size='16'/></a></li>
                  </ul>
                </div>
                </div>
                <div className="space-x-6 md:flex" >
                <div className=''>
                  <span className="text-gray text-sm text-right sm:text-right"> 
                    جميع الحقوق محفوظة 
                    <a href="#" className="text-darkgray hover:text-teal  mx-1" target="_blank" rel="noopener noreferrer">لشركة مدونة 2022  </a>
                  </span>
                </div>
              </div>
            </div>
            </div>
        </div>
      </footer>
    </>
  );
}
