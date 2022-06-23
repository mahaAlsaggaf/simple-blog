import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/Container'
import Layout from '../../components/Layouts/Layout'; 
import PostBody from '../../components/PostBody'; 
import HeaderBlog from '../../components/Headers/HeaderBlog'; 
import CommentList from '../../components/Comments/CommentList'; 





import { SITE_NAME } from '../../lib/constants'


import { getPostContentByPassingPostId, listAllPostsIdsNotTheMostReading } from '../../lib/api'


export default function Post({ post }) {
  const router = useRouter(); 

  return (
   
    <Layout>
      <Head>
        <title>Simple Next.js Blog The Presents Scraped Data from {SITE_NAME}</title>
      </Head>
        {/* // the hero header // pass the value of the first post only  */}
        <HeaderBlog post={post} />
        <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <PostBody content={post.postContent} /> 
          </>
        )}
      </Container>
    </Layout>
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
      // const postSlug = post.postId;
      
      return {
        params: {
          postId
        }
        
      }
    }),
    fallback: false
  }
}
