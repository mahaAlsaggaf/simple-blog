import Head from 'next/head'; 
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Link from 'next/link'
import PostSquaredImage from '../components/Posts/PostSquaredImage'; 
import PostSideImage from '../components/Posts/PostSideImage'; 
import PostUpperImage from '../components/Posts/PostUpperImage'; 
import PostBannerImage from '../components/Posts/PostBannerImage'; 
import PostText from '../components/Posts/PostText'; 
import Navbar from "../components/Navbars/DesktopNavigation";
import Footer from "../components/Footers/Footer";
import SectionSeparator from '../components/SectionSeparator';
import HeaderHome from '../components/Headers/HeaderHome';
import { getBlogPosts } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Index({ allPosts}) {
  const posts = allPosts; 
  // TODO!!
  // const mostReadPosts = mostReadPosts; 

  return (
    <div style={{background: "#FCFCFC"}} dir="rtl" className="font-dinnextltarabic">
        <div id="page-transition"></div>
        <Navbar />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Simple Next.js Blog The Presents Scraped Data from {SITE_NAME}</title>
      </Head>
      <HeaderHome />
      <div className="py-5 container">        
      {/* // the most reading posts // pass three posts values  */}
        <section className="section">
            <div className="container mb-2">
                <div className="d-flex justify-content-between">
                    <h4 className="darkgray text-xl"> الأكثر قراءة </h4>
                    {/* TODO add the link of most reading posts */}
                    <Link href="/">
                        <a href="#" className="inline darkgray text-sm active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal">  عرض المزيد <MdKeyboardArrowLeft className="teal inline" size='10'/> </a>   
                    </Link>

                </div>
            </div>
            <div className="relative container mx-auto">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <PostSquaredImage
                    mostReadPosts = {posts.slice(0, 3)}
                />
              </div>
            </div>
        </section>
        {/* // second section  */}
        <section className="section">
          <div className="relative container mx-auto">
            <div className="row row-cols-md-2 g-4">
              <PostUpperImage
                posts = {posts.slice(0, 1)} 
              />
              <div className="cols">
                <PostSideImage 
                    posts = {posts.slice(0, 3)} 
                />
              </div>
            </div>
          </div>
        </section>
        {/* // section seprator  */}
        <section className="section">
           <div className="relative container mx-auto">
             <div className="row">
                <SectionSeparator/>
             </div>
          </div>
        </section>
        {/* // third section  */}
        <section className="section">
           <div className="relative container mx-auto">
             <div className="row g-4">
                <PostBannerImage
                  posts = {posts.slice(0, 1)} 
                />
             </div>
          </div>
        </section>
        {/* // fourth section  */}
        <section className="section">
          {/* Flex Container */}
          <div className="relative container mx-auto">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
              <PostUpperImage
                      posts = {posts.slice(0, 4)} 
                    />
            </div>
          </div>
        </section>
        {/* // fifth section  */}

        <section className="section">
          <div className="relative container mx-auto">
            <div className="row row-cols-md-2">
              <div className="cols">
                <PostText 
                  posts = {posts.slice(0, 3)} 
                />
              </div>
              <PostSquaredImage
                  mostReadPosts = {posts.slice(0, 1)} 
                />
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allPosts = await getBlogPosts();
  // TODO !!
  // const mostReadPosts = await getMostReadPosts(); 
 
  console.log(allPosts[0]); 

  return {
    props: { allPosts},

    // props: { allPosts, mostReadPosts},
  }
}

