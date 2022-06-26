import React from "react";
import {Input} from "reactstrap";
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';


export default function Footer() {
  return ( 
    <>
    <footer>
      <div  style={{backgroundColor:'#F7F7F7'}}  className="container-fluid">
            <div className="py-5 relative container mx-auto">
              <div className="flex flex-row justify-center items-center">
                <h5 className="text-black text-md md:ml-6 md:mt-0 mt-2 text-center">
                  اشترك في القناة البريدية
                </h5>
              </div>
              <div className="flex flex-row justify-center items-center">
                <p className="small text-gray text-sm md:ml-6 md:mt-0 my-3 text-center">
                  وكن أول من يعلم عن كل جديد في عالم التجارة الإلكترونية              
                </p>
              </div> 
                <div className="d-flex flex-row justify-content-center items-center">
                  <Input
                    placeholder="البريد الإلكتروني "
                    className="text-right w-50 rounded-start border-0 "/>
                    <button className="text-white bg-teal border-0  px-5 py-2 small rounded-start">اشتراك</button>
                </div>
            </div>
          </div>
          <div  style={{backgroundColor:'#FFF'}}  className="container-fluid">
            <div className="relative container mx-auto darkgray py-3">
              {/* Flex container */}
              <div className="row d-flex justify-content-lg-between align-items-center">
                <div className="col-lg-4 col-sm-12 text-center py-2">
                  <span className="gray text-sm text-right sm:text-right"> 
                    جميع الحقوق محفوظة 
                    <a href="#" className="darkgray hover:text-teal  mx-1" target="_blank" rel="noopener noreferrer">لشركة مدونة 2022  </a>
                  </span>
                </div>
                <div className="col-lg-4 col-sm-12 text-center" >
                  <div className="d-lg-inline d-md-inline">
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><GoMail size='16' /></a>
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><FiFacebook size='16' /></a>
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><FiInstagram size='16'/></a>
                    <a className='mx-1 circle btn btn-outline-light text-secondary'><FiTwitter size='16'/></a>
                  </div>
                  <div className="d-lg-inline d-md-inline my-3"> 
                    <button className="mt-sm-3 mt-md-3 text-white bg-orange border-0 px-5 py-2 rounded text-sm">كن كاتباً معنا</button> 
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12 text-center py-2" >
                  <span className="hover:text-teal text-sm"> 
                    <a href="#" className="gray ml-1" target="_blank" rel="noopener noreferrer">الشروط والأحكام </a>
                  </span>
                </div>
              </div>
            </div>
        </div>
    </footer>
    </>
  );
}
