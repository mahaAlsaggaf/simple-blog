import React, {useState} from "react";
import Link from 'next/link'
import { BsMoon, BsSearch } from 'react-icons/bs';

export function DesktopNavigation() {

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
        <button onClick={handleCollapsepButtonClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapseClass}>
          <ul className="text-center navbar-nav mb-2 mb-lg-0 py-lg-3 px-lg-5">
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


   

export default DesktopNavigation;


