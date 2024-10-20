// import Posts from '@/components/posts';
import PostsWithSearch from '@/components/Post-With-Search';
import { getPosts } from '@/lib/posts';
import React from 'react'

 async function PostsPage() {
  const posts=await getPosts()
  return (
    <div className='pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-10'>Posts</h1>
      <PostsWithSearch posts={posts}/>
      </div>
    </div>
  )
}

export default PostsPage;
