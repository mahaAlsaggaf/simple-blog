
import React from "react";

import Navbar from "../Navbars/DesktopNavigation";
import Footer from "../Footers/Footer";

export default function Layout({ children }){
  return (
    <body dir="rtl" className="font-dinnextltarabic bg-verylightergray">
        <div id="page-transition"></div>
        <Navbar />
        {children}
        <Footer />
    </body>
);
}