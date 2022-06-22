import Head from 'next/head'
import Container from '../components/container'
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Link from 'next/link'

// import MoreStories from '../components/more-stories'
import PostUpperImage from '../components/Posts/PostUpperImage'; 


import Layout from '../components/Layouts/Layout'; 
import { getBlogPosts, getMostReadPosts } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Reports({allPosts}) {
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
      <Container>
        {/* // the most reading posts // pass three posts values  */}
        <section className="section">
            <div className="relative container mx-auto p-6 text-darkgray">
                <div className="flex justify-center">
                    <h1 className="text-black text-4xl"> التقارير والدراسات </h1>
                    {/* TODO add the link of most reading posts */}
                </div>
            </div>
            {/* TODO  Fix this */}
            
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">1</div>
                <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">2</div>
                <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">3</div>
                <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6 bg-gray-100">4</div>
              </div>
            </div>
            {/* <div className="relative container mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <PostUpperImage
                      posts = {posts.slice(0, 9)}
                  />
              </div>
            </div> */}
              {/* <div className="container mx-auto sm:flex-wrap md:flex space-y-6">
                <PostUpperImage
                      posts = {posts.slice(3, 6)}
                  />
              </div>
              <div className="container mx-auto sm:flex-wrap md:flex space-y-6">
                <PostUpperImage
                      posts = {posts.slice(6, 9)}
                  />  
            </div>*/}
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

