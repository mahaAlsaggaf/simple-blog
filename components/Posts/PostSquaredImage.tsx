import React from "react";
import Link from 'next/link'



// components

// blogContent: blogs[i].blogContent,
export default function PostSquaredImage({
  mostReadPosts
}) {
  return (
    <>
        {mostReadPosts.map((post) => (
            <div className="lg:w-auto w-full px-2 h-fullmb-10 lg:mb-0 rounded-sm overflow-hidden">
              <div
                className="relative pt-8 h-full container mx-auto">
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
                    <div className="w-full ml-auto pt-1/2 mt-16 text-start">
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
                        <h1 className="text-xl text-white mb-4">
                          <Link href={`/posts/${post.postId}`}>
                              <a
                                className="hover:underline hover:text-teal"
                                dangerouslySetInnerHTML={{ __html: post.postTitle }}
                              />
                            </Link>
                        </h1>
                        <p className="text-sm text-white mb-4" 
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
            </div>
        ))}
       
    </>
  );
}
