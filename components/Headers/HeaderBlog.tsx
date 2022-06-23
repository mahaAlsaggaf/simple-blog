
import {BiHomeAlt} from 'react-icons/bi';
import Link from 'next/link';
import Container from '../Container'; 
import Avatar from '../../components/Avatar'




export default function HeaderBlog({post, location} ) {
    return ( 
      <>
      <section className="bg-image img-fluid post-page-bg-overlay">
        {/* Flex Container */}
        <Container>
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
                  أصبحت تغليف المنتجات أكثر أهمية من أي وقت مضى
                    {/* <Link href={`/posts/${post.postId}`}>
                      <a
                        className="hover:underline hover:text-teal"
                        dangerouslySetInnerHTML={{ __html: post.postTitle }}
                      />
                    </Link> */}
                  </h2>
                  {/* <p className="card-text my-2"  
                    dangerouslySetInnerHTML={{ __html: post.postExcerpt }}>
                  </p> */}
                    <Avatar author={post.postAuthor}/>
                    
                 
              </div>
            </div>
          </div>
        </Container>
      </section>

        {/* <section id="hero">
          <div
            className="relative pt-16 pb-32 flex ">
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('/images/blog-header-image.png')",
                }}
            ></div>
            <span
              id="blackOverlay"
              className="top-0 w-full h-full absolute bg-gradient-to-b from-lightgray via-darkgray to-black opacity-75 "
            ></span>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-start ">
                    <div className="text-xs">
                        <Link  href="/" >
                          <a className="inline text-teal hover:text-white hover:underline">  
                            <BiHomeAlt className="inline" size='10'/> الرئيسية  
                          </a>
                        </Link>
                        /<p> {location}</p>
                    </div>
                    <h1 className="text-white text-5xl ">
                    {post.postTitle}
                    </h1>


                  
                    <p className="text-white text-xs ">
                    {post.postDate} منذ: <div className="vr"></div> {post.postAuthor}بواسطة : 
                    </p>


                    
                   
                </div>
              </div>
            </div>
          </div>
        </section> */}
    </>
  );
}