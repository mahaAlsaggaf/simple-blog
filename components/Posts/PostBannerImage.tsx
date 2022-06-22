import React from "react";
import Link from 'next/link'


// components

export default function PostBannerImage({posts}) {
  return (
    <>
          {posts.map((post) => (
            <div
              className="relative pt-8 pb-8 container mx-auto">
              {/* Background image */}
              <div
                  className="absolute top-0 w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage:
                    `url(${post.postItemImg})`,
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
                    <div className="p-4">
                      <div className="border-r-2 border-teal ">
                        <h2 className="mr-1 text-sm text-white mb-4">
                          <Link href={`/posts/${post.postId}`}>
                            <a
                              className="hover:underline hover:text-teal"
                              dangerouslySetInnerHTML={{ __html: post.postCat }}
                            />
                          </Link>
                        </h2>
                      </div>
                      
                      <h1 className="text-4xl text-white mb-4">
                        <Link href={`/posts/${post.postId}`}>
                          <a
                            className="hover:underline hover:text-teal"
                            dangerouslySetInnerHTML={{ __html: post.postTitle }}
                          />
                        </Link>
                      </h1>
                      <p className="text-2xl text-white mb-4" 
                        dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
                      </p>

                      <h2 className="mr-1 text-sm text-white mb-1" 
                        dangerouslySetInnerHTML={{ __html: post.postDate }}>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

    </>
  );
}
