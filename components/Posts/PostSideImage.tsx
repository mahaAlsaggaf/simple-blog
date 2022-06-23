import React from "react";
import Link from 'next/link'



// components

export default function PostSideImage({posts}) {
  return (
    <>
      {posts.map((post) => (
        <div className="row g-0 border-0 rounded overflow-hidden mb-2 position-relative">
          <div className="col-auto d-none d-lg-block">
            <Link href={`/posts/${post.postId}`}>
              <a>
                <img
                  className="bd-placeholder-img h-100" width="200" 
                  src={post.postItemImg}
                  alt={post.postTitle}
                />
              </a>
            </Link>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <h6 className="d-inline-block mb-2 text-primary">
                <span className="vr"></span>
                <Link href={`/posts/${post.postId}`}>
                  <a
                    className="hover:underline hover:text-teal"
                    dangerouslySetInnerHTML={{ __html: post.postCat }}
                  />
                </Link>
              </h6>
              <h5 className="mb-0">
                <Link href={`/posts/${post.postId}`}>
                  <a
                    className="hover:underline hover:text-teal"
                    dangerouslySetInnerHTML={{ __html: post.postTitle }}
                  />
                </Link>
              </h5>
              <p className="card-text my-2"  
                dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
              </p>
              <h6 className="card-text my-2"  
                dangerouslySetInnerHTML={{ __html: post.postDate }}>
              </h6>
            </div>
        </div>
      ))}
    </>
  );
}
