import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import Layout from '../../components/Layouts/Layout'; 
import PostBody from '../../components/PostBody'; 
import HeaderBlog from '../../components/Headers/HeaderBlog'; 




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
        <HeaderBlog  post={post} />
        <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article>
                <title>
                  {/* {post.title} | Scraped Data from {SITE_NAME} */}
                </title>
                {/* <meta
                  property="og:image"
                  content={post.featuredImage?.sourceUrl}
                /> */}
              {/* <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              /> */}
              <PostBody content={post.postContent} />
            
            </article>

            {/* <SectionSeparator /> */}
            {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
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
