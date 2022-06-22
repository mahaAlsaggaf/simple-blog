
import {BiHomeAlt} from 'react-icons/bi';
import Link from 'next/link';


export default function HeaderBlog({post, location} ) {
    return ( 
      <>
      {/* Header */}
        {/* Hero Section */}
        <section id="hero">
          {/* Flex Container */}
          <div
            className="relative pt-16 pb-32 flex ">
            {/* Background image */}
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
            {/* Text item */}
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-start ">
                    {/* pages tree */}
                    <div className="text-xs">
                        <Link  href="/" >
                          <a className="inline text-teal hover:text-white hover:underline">  
                            <BiHomeAlt className="inline" size='10'/> الرئيسية  
                          </a>
                        </Link>
                        /<p> {location}</p>
                    </div>
                    {/* post title  */}
                    <h1 className="text-white text-5xl ">
                    {post.postTitle}
                    </h1>

                    {/* post author avatar  */}

                  
                    {/* post author  */}
                    <p className="text-white text-xs ">
                    {post.postDate} منذ: | {post.postAuthor}بواسطة : 
                    </p>
                    {/* post date  */}


                    
                   
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}