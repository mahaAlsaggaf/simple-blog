import React from "react";
// import SectionSeparator from '../../components/SectionSeparator';
import Link from 'next/link'



export default function PostText({posts}) {
    return (
      <>
         {/* <section className="text-gray-600 body-font">
            <div className="container px-5 mx-auto flex flex-wrap">
              <div className="lg:w-2/3 w-full  h-fullmb-10 lg:mb-0 rounded-sm overflow-hidden">
                <div
                  className="relative pt-8 h-full container mx-auto">
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
                  <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                      <div className="w-full ml-auto pt-1/2 mt-52 text-end">
                        <div className="p-4">
                          <div className="border-r-2 border-teal ">
                            <h2 className="mr-1 text-sm text-white mb-4">
                              افكار البزنس
                            </h2>
                          </div>
                          
                          <h1 className="text-xl text-white mb-4">
                            ماهو مستقبل التجارة الالكترونية
                          </h1>
                          <p className="text-sm text-white mb-4">
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
              </div> */}
              {/* <div className="flex flex-col py-px lg:w-1/3 lg:pl-12 lg:text-right text-center"> */}
              {posts.map((post) => (
                <div className="flex flex-col mb-4 items-start">
                  <div className="flex-grow">
                    <div className="border-r-2 border-teal ">
                      <h2 className="mr-1 text-xs text-darkgray mb-1">
                      <Link href={`/posts/${post.postId}`}>
                        <a
                          className="hover:underline hover:text-teal"
                          dangerouslySetInnerHTML={{ __html: post.postCat }}
                        />
                      </Link>
                      </h2>
                    </div>
                    
                    <h1 className="text-sm text-black mb-2">
                    <Link href={`/posts/${post.postId}`}>
                          <a
                            className="hover:underline hover:text-teal"
                            dangerouslySetInnerHTML={{ __html: post.postTitle }}
                          />
                    </Link>                    </h1>
                    <p className="text-sm text-gray mb-3"
                    dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
                    </p>
  
                    <h2 className="mr-1 text-xs text-garkgray mb-1"
                        dangerouslySetInnerHTML={{ __html: post.postDate }}>
                    </h2>
                  </div>
                </div>
                ))}
                {/* <span className="border-b-2 border-lightgray mb-4"></span> */}
                {/* <div className="flex flex-col mb-4 items-end">
                  <div className="flex-grow">
                    <div className="border-r-2 border-teal ">
                      <h2 className="mr-1 text-xs text-darkgray mb-1">
                        افكار البزنس
                      </h2>
                    </div>
                    
                    <h1 className="text-sm text-black mb-2">
                      ماهو مستقبل التجارة الالكترونية
                    </h1>
                    <p className="text-sm text-gray mb-3">
                    إلى 4.5 تريليون في عام 2021 المبيعات من 1.3 تريليون في عام 2014 أن تزيد أكثر من ذلك  
                    </p>
  
                    <h2 className="mr-1 text-xs text-garkgray mb-1">
                        بواسطة عبدالله عادل
                    </h2>
                  </div>
                </div>
                <span className="border-b-2 border-lightgray mb-4"></span>
                <div className="flex flex-col items-end">
                  <div className="flex-grow">
                    <div className="border-r-2 border-teal ">
                      <h2 className="mr-1 text-xs text-darkgray mb-1">
                        افكار البزنس
                      </h2>
                    </div>
                    
                    <h1 className="text-sm text-black mb-2">
                      ماهو مستقبل التجارة الالكترونية
                    </h1>
                    <p className="text-sm text-gray mb-3">
                    إلى 4.5 تريليون في عام 2021 المبيعات من 1.3 تريليون في عام 2014 أن تزيد أكثر من ذلك  
                    </p>
  
                    <h2 className="mr-1 text-xs text-garkgray">
                        بواسطة عبدالله عادل
                    </h2>
                  </div>
                </div> */}
              {/* </div> */}
            {/* </div>
          </section> */}
      </>
    );
  }