import Posts from '@/components/posts'
import { IPost } from '@/interfaces/post';
import { getPosts } from '@/lib/posts';
import React from 'react'

const FeedPage = async() => {
    const posts = await getPosts() as IPost[];
  return (
    <>
      <h1>All posts by all users</h1>
      {posts && posts.map(post => <Posts key={post.id} post={post} />)}
    </>
  )
}

export default FeedPage