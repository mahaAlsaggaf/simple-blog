import React from "react";
import Image from 'next/image'
import { BsMoon, BsSearch } from 'react-icons/bs';
// import useDarkMode from '../../hooks/useDarkMode';


// components

export function DesktopNavigation(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    {/* Nav bar  */}
    <nav className="relative container mx-auto p-6 text-darkgray bg-white">
          {/* Flex container */}
          <div className="flex items-center justify-around">
            {/* Buttons */}
            <ul className="hidden md:flex">
                <li className='rounded-full ring-1 ring-lightgray my-auto p-2 mx-1'><a className='bg-lightergray text-secondary'> <BsMoon size='10'/></a></li>
                <li className='rounded-full ring-1 ring-lightgray my-auto p-2 mx-1'><a className='bg-lightergray text-secondary'> <BsSearch size='10'/></a></li>
            </ul>
            
            {/* Menu Items */}
            <div className="hidden space-x-6 md:flex">
                <a href="#" className="text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> المقالات </a>
                <a href="#" className="text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> التقارير والدراسات </a>
                <a href="#" className="text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> الرئيسية </a>
            </div>

            {/* Hamburger Icon */}
            <button
              id="menu-btn"
              className="block hamburger md:hidden focus:outline-none"
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>

              {/* Logo */}
              <div className="pt-2">
                <img src="/images/logo-light-mood.png" width="90px" height="30px" alt="" />
              </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <div
              id="menu"
              className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-darkgray sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
                <a href="#" className="text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> المقالات </a>
                <a href="#" className="text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> التقارير والدراسات </a>
                <a href="#" className="text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> الرئيسية </a>

            </div>
          </div>
         
        </nav>
    </>
  );
};


// set up the dark mood effect
// const ThemeIcon = () => {
//   const [darkTheme, setDarkTheme] = useDarkMode();
//   const handleMode = () => setDarkTheme(!darkTheme);
//   return (
//     <span onClick={handleMode}>
//       {/* {darkTheme ? (
//         <FaMoon size='24' className='top-navigation-icon' />
//         ) : (
//         <FaMoon size='24' className='top-navigation-icon' />
//       )} */}
//     </span>
//   );
// };

// define the search popup element
const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    {/* <FaSearch size='18' className='text-secondary my-auto' /> */}
  </div>
);

// define the logo
const Logo = () => (
  <a className="justify-start navbar-brand">
    <Image
            priority
            className="h-8 w-auto sm:h-10"
            src="/images/logo-light-mood.png"
            height={30}
            width={90}
          />
  </a>
);
// define the pages list 
const Pages = () => (

  <ul className="items-right content-start lg:justify-center md:justify-end navbar-nav md:flex">
    {/* <!-- flex flex-row mx-auto my-0 navbar-nav --> */}
    <li className="nav-item active">
      <a href="#" className="mx-2 text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> المقالات </a>
    </li>
    <li className="nav-item">
      <a href="#" className="mx-2 text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> التقارير والدراسات </a>
    </li>
    <li className="nav-item">
      <a href="#" className="mx-2 text-darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> الرئيسية </a>
    </li>
                                
  </ul>
              
  
  );
export default DesktopNavigation;


