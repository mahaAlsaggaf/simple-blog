import React from "react";
import Link from 'next/link'

export default function PostUpperImage({posts}) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.postId} className="col mb-2"> 
          <div className="bg-image card border-0 h-100">
            <Link href={`/posts/${post.postId}`}>
              <a>
                <img
                  className="img-fluid bd-placeholder-img card-img-top"
                  src={post.postItemImg}
                  alt={post.postTitle}
                  width="100%"
                />
              </a>
            </Link>
            <div className="card-body text-end">
                <h6 className="mr-1 text-xs darkgray mb-1">
                  <span className="vr"></span>
                  <Link href={`/posts/${post.postId}`}>
                    <a
                      className="hover:underline hover:text-teal"
                      dangerouslySetInnerHTML={{ __html: post.postCat }}
                    />
                  </Link>
                </h6>
              <div>
                <h5 className="card-text">
                  <Link href={`/posts/${post.postId}`}>
                    <a
                      className="hover:underline hover:text-teal"
                      dangerouslySetInnerHTML={{ __html: post.postTitle }}
                    />
                  </Link>
                </h5>
                <p className="card-text text-lead" 
                    dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
                </p>

                <h2 className="small card-text"
                    dangerouslySetInnerHTML={{ __html: post.postDate }}>
                </h2>
              </div>
              
            </div>
          </div>
        </div>
        ))}
    </>


      );
}