import { togglePostLikeStatus } from '@/actions/posts';
import Posts from '@/components/posts'
import { IPost } from '@/interfaces/post';
import { getPosts } from '@/lib/posts';
import React, { useOptimistic } from 'react'

const FeedPage = async() => {
    const posts = await getPosts() as IPost[];

  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  )
}

export default FeedPage