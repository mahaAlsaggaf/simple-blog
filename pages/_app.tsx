import React from "react";
import '../styles/global.css'
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp