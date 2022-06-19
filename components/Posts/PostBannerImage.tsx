import React from "react";

// components

export default function PostBannerImage() {
  return (
    <>
      {/* Banner Section */}
      <section id="hero">
            {/* Flex Container */}
            <div
              className="relative pt-8 pb-8 container mx-auto">
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
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-end ">
                    <div className="p-4">
                      <div className="border-r-2 border-teal ">
                        <h2 className="mr-1 text-sm text-white mb-4">
                          افكار البزنس
                        </h2>
                      </div>
                      
                      <h1 className="text-4xl text-white mb-4">
                        ماهو مستقبل التجارة الالكترونية
                      </h1>
                      <p className="text-2xl text-white mb-4">
                      إلى 4.5 تريليون في عام 2021 المبيعات من 1.3 تريليون في عام 2014 أن تزيد أكثر من ذلك  
                      </p>

                      <h2 className="mr-1 text-sm text-white mb-1">
                          بواسطة عبدالله عادل
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
