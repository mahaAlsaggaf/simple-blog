import React from "react";
import Link from 'next/link'


export default function PostUpperImage({posts}) {
  return (
    <>
      
      {/* Hero Section */}
      {/* <section id="hero"> */}
          {/* Flex Container */}
          {/* <div className="container py-24 px-5 mx-auto">
            <div className="flex flex-wrap"> */}
            {posts.map((post) => (
              <div className="flex justify-center w-1/4"> 
                <div className="min-h-screen rounded-sm overflow-hidden">
                  <Link href={`/posts/${post.postId}`}>
                    <a>
                      <img
                        className="lg:h-48 md:h-36 w-fit object-cover object-center"
                        src={post.postItemImg}
                        alt={post.postTitle}
                      />
                    </a>
                  </Link>
                  <div className="p-4 bg-white">
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
                    <div>
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
                </div>
              </div>
              ))}

              {/* </div> */}
            {/* </div>
          </div>
        </section> */}
    </>


      );
}