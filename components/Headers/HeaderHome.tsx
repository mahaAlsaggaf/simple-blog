import React from "react";

// components

export default function HeaderHome() {
  return (
    <>
      {/* Header */}
        {/* Hero Section */}
        <section id="hero">
          {/* Flex Container */}
          <div
            className="relative pt-16 pb-32 flex ">
            {/* Background image */}
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                }}
            ></div>
            <span
              id="blackOverlay"
              className="top-0 w-full h-full absolute bg-gradient-to-b from-lightgray via-darkgray to-black opacity-75 "
            ></span>
            {/* Text item */}
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-start ">
                  <div className="pr-2 border-r-2 border-teal ">
                    <h1 className="text-white text-5xl ">
                    مركز المدونة
                    </h1>
                    <p className="mt-4 text-lg text-white">
                    مركز للتعليم ونشر المعرفة عبر المقالات والدونات المتخصصة بموضوعات التجارة الإلكتروني والاقتصاد والتقنية، وما يخص حياتنا كتجار، كل ما ترديه عن التجارة الالكترونيه والاقتصاد
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
