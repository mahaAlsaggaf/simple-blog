import Head from 'next/head'
import PostUpperImage from '../components/Posts/PostUpperImage'; 

import Navbar from "../components/Navbars/DesktopNavigation";
import Footer from "../components/Footers/Footer";

import { getBlogPosts } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Reports({allPosts}) {
  const posts = allPosts; 

  return (
    //   <></>
    <div style={{background: "#FCFCFC"}} dir="rtl" className="font-dinnextltarabic">
    <Navbar />
      <Head>
        <title>Simple Next.js Blog The Presents Scraped Data from {SITE_NAME}</title>
      </Head>
       
        <div className="py-5 container">       
        <section className="section">
            <div className="relative container mx-auto my-5">
                <div className="text-center">
                    <h1 className="text-black text-4xl"> التقارير والدراسات </h1>
                </div>
            </div>
            <div className="relative container mx-auto">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <PostUpperImage
                      posts = {posts.slice(0, 9)}
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
 
  console.log(allPosts[0]); 

  return {
    props: { allPosts},

  }
}

