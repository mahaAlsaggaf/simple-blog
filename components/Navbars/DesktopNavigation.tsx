import React, {useState} from "react";
import Image from 'next/image'
import Link from 'next/link'
import { BsMoon, BsSearch } from 'react-icons/bs';
import useDarkMode from '../../hooks/useDarkMode.js';



// components

export function DesktopNavigation(props) {

  const [collapseClass, setcollapseClass] = useState("collapse navbar-collapse");
  const [darkMoodClass, setdarkMoodClass] = useState("navbar navbar-expand-lg navbar-light bg-white");
  const [darkMoodLogoPath, setdarkMoodLogoPath] = useState("/images/logo-light-mood.png");


  const handleCollapsepButtonClick = () => {
     if (collapseClass == "show collapse navbar-collapse"){
      setcollapseClass("collapse navbar-collapse"); 
     }else{
      setcollapseClass("show collapse navbar-collapse" ); 
     }
  };
  const handleDarkMoodButtonClick = () => {
    if (darkMoodClass == "navbar navbar-expand-lg navbar-light bg-white"){
      setdarkMoodClass("navbar navbar-expand-lg navbar-dark bg-dark"); 
      setdarkMoodLogoPath("/images/logo-dark-mood.png");
    }else{
      setdarkMoodClass("navbar navbar-expand-lg navbar-light bg-white" ); 
      setdarkMoodLogoPath("/images/logo-light-mood.png");
    }
 };
  
  return (
    <>
    {/* Nav bar  */}
    <nav className={darkMoodClass}>
      <div className="container">
        <Link href="/">
          <a href="/" className="navbar-brand">
              <img src={darkMoodLogoPath} width="90px" height="30px" alt="" />
          </a>
        </Link>
        <button onClick={handleCollapsepButtonClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapseClass} id="navbarsExample07">
          <ul className="text-center navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/"><a className="nav-link" aria-current="page" href="#">الرئيسية</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/reports"><a className="nav-link" href="#">التقارير والدراسات</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/archive"><a className="nav-link">المقالات</a></Link>
            </li>
          </ul>
          <div className="text-center me-auto text-lg-end">
            <button onClick={handleDarkMoodButtonClick} type="button" className="mx-1 circle btn btn-outline-light text-secondary"><BsMoon className="" size='14'/></button>
            <button type="button" className="mx-1 circle btn btn-outline-light text-secondary"><BsSearch className="" size='14'/></button>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};


// set up the dark mood effect
const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <BsMoon size='24' className='top-navigation-icon' />
      ) : (
        <BsMoon size='24' className='top-navigation-icon' />
      )}
    </span>
  );
};

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
      <a href="#" className="mx-2 darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> المقالات </a>
    </li>
    <li className="nav-item">
      <a href="#" className="mx-2 darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> التقارير والدراسات </a>
    </li>
    <li className="nav-item">
      <a href="#" className="mx-2 darkgray active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal text-base font-medium"> الرئيسية </a>
    </li>
                                
  </ul>
              
  
  );
export default DesktopNavigation;


