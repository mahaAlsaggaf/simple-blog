import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import PostBody from '../../components/PostBody'; 


import Navbar from "../../components/Navbars/DesktopNavigation";
import Footer from "../../components/Footers/Footer";


import { SITE_NAME } from '../../lib/constants'


import { getPostContentByPassingPostId, listAllPostsIdsNotTheMostReading } from '../../lib/api'


export default function Post({ post }) {
  const router = useRouter(); 

  return (
   
    <div style={{background: "#FCFCFC"}} dir="rtl" className="font-dinnextltarabic">
    <div id="page-transition"></div>
    <Navbar />
      <Head>
        <title>Simple Next.js Blog The Presents Scraped Data from {SITE_NAME}</title>
      </Head>
        <div className="py-5 container">
            <PostBody content={post.postContent} /> 
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const postId = params.postId; 
  const results = await getPostContentByPassingPostId(postId);
  console.log("getStaticProps"); 
  console.log(results); 
  return {
    props: {
      post: results[0]
    }
  }
}

export async function getStaticPaths() {
  const posts = await listAllPostsIdsNotTheMostReading();
  console.log("getStaticPaths"); 
  console.log(posts); 
  return {
    paths: posts.map(post => {
      const postId = post.postId.toString();      
      return {
        params: {
          postId
        }
        
      }
    }),
    fallback: false
  }
}
