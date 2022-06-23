import Head from 'next/head'
import Container from '../components/Container'
import { MdKeyboardArrowLeft } from 'react-icons/md';

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
            <div className="relative container mx-auto my-5">
                <div className="text-center">
                    <h1 className="text-black text-4xl"> التقارير والدراسات </h1>
                    {/* TODO add the link of most reading posts */}
                </div>
            </div>
            {/* TODO  Fix this */}
            <div className="relative container mx-auto">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <PostUpperImage
                      posts = {posts.slice(0, 9)}
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

