
import React from "react";

import Navbar from "../Navbars/DesktopNavigation";
import Footer from "../Footers/Footer";

export default function Layout({ children }){
  return (
    <div style={{background: "#FCFCFC"}} dir="rtl" className="font-dinnextltarabic">
        <div id="page-transition"></div>
        <Navbar />
        {children}
        <Footer />
    </div>
);
}