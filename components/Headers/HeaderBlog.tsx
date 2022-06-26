
import {BiHomeAlt} from 'react-icons/bi';
import Link from 'next/link';
import Avatar from '../../components/Avatar'

export default function HeaderBlog({post, location} ) {
    return ( 
      <>
      <section className="bg-image img-fluid post-page-bg-overlay">
        {/* Flex Container */}
        <div className="py-5 container">
          <div className="p-4 p-md-5 mt-5 text-white">
            <div className="row">
                <div className="col d-flex flex-column position-static">
                  <p className="text-white d-inline-block mb-2 text-sm">
                    <Link  href="/" >
                          <a className="inline teal text-sm">  
                            <BiHomeAlt className="teal inline align-baseline" size='14'/> الرئيسية  
                          </a>
                    </Link>
                      / المقالات
                  </p>
                  <h2 className="mb-0">
                    <Link href={`/posts/${post.postId}`}>
                      <a
                        className="text-white"
                        dangerouslySetInnerHTML={{ __html: post.postTitle }}
                      />
                    </Link>
                  </h2>
                    <Avatar author={post.postAuthor}/>
              </div>
            </div>
          </div>
        </div>
      </section>       
    </>
  );
}