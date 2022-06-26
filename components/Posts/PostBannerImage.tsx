import React from "react";
import Link from 'next/link'


export default function PostBannerImage({posts}) {
  return (
    <>
          {posts.map((post) => (
            <div className="col">
            <div className="bg-image img-fluid post-bg-overlay" style={{
              background:`linear-gradient(rgba(148, 146, 146, 0.7), rgba(0, 0, 0, 0.9)),url(${post.postItemImg})`}}> 
              <div className="container p-lg-5 mx-lg-5">
                <div className="card-body p-lg-5 mx-lg-5">
                  <h6 className="text-sm mb-4 ">
                    <span className="vr"></span>
                    <Link href={`/posts/${post.postId}`}>
                      <a
                        className="text-white"
                        dangerouslySetInnerHTML={{ __html: post.postCat }}
                      />
                    </Link>
                  </h6>
                  <h2 className="card-title">
                    <Link href={`/posts/${post.postId}`}>
                      <a
                        className="text-white "
                        dangerouslySetInnerHTML={{ __html: post.postTitle }}
                      />
                    </Link>
                  </h2>
                  <p className="text-white text-lg card-text my-2"  
                    dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
                  </p>
                  <h6 className="text-white card-text my-2"  
                    dangerouslySetInnerHTML={{ __html: post.postDate }}>
                  </h6>
                </div>
              </div>
            </div>
          </div> 
            // <div
            //   className="relative pt-8 pb-8 container mx-auto">
            //   <div
            //       className="absolute top-0 w-full h-full bg-center bg-cover"
            //       style={{
            //         backgroundImage:
            //         `url(${post.postItemImg})`,
            //       }}
            //   ></div>
            //   <span
            //     id="blackOverlay"
            //     className="top-0 w-full h-full absolute bg-gradient-to-b from-lightgray via-darkgray to-black opacity-75 "
            //   ></span>
            //   <div className="container relative mx-auto">
            //     <div className="items-center flex flex-wrap">
            //       <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-start ">
            //         <div className="p-4">
            //           <div className="border-r-2 border-teal ">
            //             <h2 className="mr-1 text-sm text-white mb-4">
            //               <Link href={`/posts/${post.postId}`}>
            //                 <a
            //                   className="hover:underline hover:text-teal"
            //                   dangerouslySetInnerHTML={{ __html: post.postCat }}
            //                 />
            //               </Link>
            //             </h2>
            //           </div>
                      
            //           <h1 className="text-4xl text-white mb-4">
            //             <Link href={`/posts/${post.postId}`}>
            //               <a
            //                 className="hover:underline hover:text-teal"
            //                 dangerouslySetInnerHTML={{ __html: post.postTitle }}
            //               />
            //             </Link>
            //           </h1>
            //           <p className="text-2xl text-white mb-4" 
            //             dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
            //           </p>

            //           <h2 className="mr-1 text-sm text-white mb-1" 
            //             dangerouslySetInnerHTML={{ __html: post.postDate }}>
            //           </h2>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          ))}

    </>
  );
}
