const API_URL = process.env.API_URL; 

async function fetchAPI(path) {
  const headers = { 'Content-Type': 'application/json' }

  console.log(API_URL); 

  // Call a remote api that saves scrapped Salla blg data
  const res = await fetch(`${API_URL}${path}`, {
    headers,
    method: 'GET',
  })
  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json; 
}

export async function getBlogPosts() {
  const data = await fetchAPI('/getblogposts/'); 
  console.log(data);
  
  return data; 
}
export async function getPostContentByPassingPostId(postId) {
  const data = await fetchAPI(`/post/${postId}`); 
  console.log(data);

  return data; 
}
export async function listAllPostsIdsNotTheMostReading() {
  const data = await fetchAPI(`/listpostsids/`); 
  console.log(data);

  return data; 
}
