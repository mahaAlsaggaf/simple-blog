import Head from 'next/head'
import Container from '../components/container'
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Link from 'next/link'

// import MoreStories from '../components/more-stories'
import PostSquaredImage from '../components/Posts/PostSquaredImage'; 
import PostSideImage from '../components/Posts/PostSideImage'; 
import PostUpperImage from '../components/Posts/PostUpperImage'; 
import PostBannerImage from '../components/Posts/PostBannerImage'; 
import PostText from '../components/Posts/PostText'; 


import SectionSeparator from '../components/SectionSeparator';


import HeaderHome from '../components/Headers/HeaderHome';

import Layout from '../components/Layouts/Layout'; 
import { getBlogPosts, getMostReadPosts } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Index({ allPosts}) {
  const posts = allPosts; 
  // TODO!!
  // const mostReadPosts = mostReadPosts; 

  return (
    //   <></>
    <Layout>
      <Head>
        <title>Simple Next.js Blog The Presents Scraped Data from {SITE_NAME}</title>
      </Head>
        {/* // the hero header // pass the value of the first post only  */}
        <HeaderHome />
      <Container>
        {/* // the most reading posts // pass three posts values  */}
        <section>
            <div className="relative container mx-auto p-6 text-darkgray">
                <div className="flex justify-between">
                    <span className="text-darkgray text-xl"> الأكثر قراءة </span>
                    {/* TODO add the link of most reading posts */}
                    <Link href="/">
                        <a href="#" className="inline text-darkgray text-sm active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal">  عرض المزيد <MdKeyboardArrowLeft className="inline" size='10'/> </a>   
                    </Link>

                </div>
            </div>
            <div className="container mx-auto sm:flex-wrap md:flex">
                <PostSquaredImage
                    mostReadPosts = {posts.slice(0, 3)}
                />
            </div>
        </section>
        {/* // second section  */}
        <section className="section">
          <div className="container mx-auto sm:flex-wrap md:flex">
              <div className="lg:w-1/2 w-full  h-fullmb-10 lg:mb-0 rounded-sm overflow-hidden">
                  <PostUpperImage
                    posts = {posts.slice(0, 1)} 
                  />
              </div>
              <div className="flex flex-col py-px pr-4 lg:w-1/2 lg:pl-12 lg:text-right text-center">
                    <PostSideImage 
                        posts = {posts.slice(0, 3)} 
                    />
              </div>
          </div>
        </section>
        {/* // section seprator  */}
        <section className="section">
          <SectionSeparator/>
        </section>
        {/* // third section  */}
        <section className="section">
          <PostBannerImage
            posts = {posts.slice(0, 1)} 
          />
        </section>
        {/* // fourth section  */}
        <section id="hero">
          {/* Flex Container */}
          <div className="container py-24 mx-auto">
            <div className="sm:flex-wrap md:flex">
              <PostUpperImage
                      posts = {posts.slice(0, 4)} 
                    />
            </div>
          </div>
        </section>
        {/* // fifth section  */}

        <section className="section">
          <div className="container mx-auto flex flex-wrap">
              <div className="lg:w-1/3 w-full  h-fullmb-10 lg:mb-0 rounded-sm overflow-hidden">
                  <PostText 
                    posts = {posts.slice(0, 3)} 
                  />
                  
              </div>
              <div className="lg:w-2/3 w-full  h-fullmb-10 lg:mb-0 rounded-sm overflow-hidden">
                <PostSquaredImage
                    mostReadPosts = {posts.slice(0, 1)} 
                  />
              </div>
          </div>
        </section>

          
        
      </Container>
    </Layout>
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

