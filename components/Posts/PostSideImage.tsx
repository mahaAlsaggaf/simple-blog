import React from "react";
import Link from 'next/link'



// components

export default function PostSideImage({posts}) {
  return (
    <>
      {/* <section className="">
          <div className="container px-5 mx-auto flex flex-wrap"> */}

          {posts.map((post) => (
            // <>
              <div className="h-full w-full flex items-start">
                <div className="w-1/3 flex-shrink-0 flex flex-col text-center">
                  <Link href={`/posts/${post.postId}`}>
                    <a>
                      <img
                        className="rounded-md lg:h-full md:h-36 w-full object-cover object-center"
                        src={post.postItemImg}
                        alt={post.postTitle}
                      />
                    </a>
                  </Link>
                  </div>
                  <div className="flex-grow pr-6">
                    <div className="border-r-2 border-teal ">
                      
                      {/* // TODO Make the category as a link  */}
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
                      </Link>
                    </h1>
                    <p className="text-sm text-gray mb-3"
                      dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
                    </p>

                    <h2 className="mr-1 text-xs text-garkgray mb-1"  
                      dangerouslySetInnerHTML={{ __html: post.postDate }}>
                    </h2>
                  </div>
                </div>
              // </>
            ))}
            {/* </div> */}
            {/* <div className="lg:w-1/2 w-full  h-fullmb-10 lg:mb-0 rounded-sm overflow-hidden">
              <div className="h-full rounded-sm overflow-hidden text-start">
                <img
                  className="lg:h-2/3 md:h-2/3 w-full object-cover object-center"
                  src="https://www.publicdomainpictures.net/pictures/380000/nahled/00026-technology-im-cyberspace.jpg"
                  alt="blog"
                />
                <div className="p-4 bg-white">
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
            </div> */}
          {/* </div>
        </section> */}
    </>
  );
}
