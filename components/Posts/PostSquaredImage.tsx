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
        <div className="col">
          <div className="bg-image img-fluid post-bg-overlay h-100" style={{
            background:`linear-gradient(rgba(148, 146, 146, 0.7), rgba(0, 0, 0, 0.9)),url(${post.postItemImg})`}}> 
            <div style={{paddingTop: "75%;"}} className="card-body">
              <h6 className="text-sm mb-4 ">
                <Link href={`/posts/${post.postId}`}>
                  <a
                    className="hover:underline hover:text-teal"
                    dangerouslySetInnerHTML={{ __html: post.postCat }}
                  />
                </Link>
              </h6>
              <h5 className="card-title">
                <Link href={`/posts/${post.postId}`}>
                  <a
                    className="hover:underline hover:text-teal"
                    dangerouslySetInnerHTML={{ __html: post.postTitle }}
                  />
                </Link>
              </h5>
              <p className="card-text text-xs my-2"  
                dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
              </p>
              <h6 className="card-text text-xs my-2"  
                dangerouslySetInnerHTML={{ __html: post.postDate }}>
              </h6>
            </div>
          </div>
        </div> 
        ))}
       
    </>
  );
}
