'use client'
import React, { useOptimistic } from 'react'
import { IPost } from '@/interfaces/post'
import { togglePostLikeStatus } from '@/actions/posts'
import Post from './post'

const Posts = ({posts}:{posts:IPost[]}) => {
  const [optimisticPost, updateOpmisticPost] = useOptimistic(posts, (prevPosts: any, updatedPostId: any) => {
    const updatedPostIndex = prevPosts.findIndex((post: IPost) => post.id === updatedPostId)

    if(updatedPostIndex === -1) return prevPosts

    const updatedPost = { ...prevPosts[updatedPostIndex] }
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1)
    updatedPost.isLiked = !updatedPost.isLiked
    const newPosts = [...prevPosts]
    newPosts[updatedPostIndex] = updatedPost
    return newPosts
  })

  const updatePost = async(postId: string) => {
    updateOpmisticPost(postId)
    await togglePostLikeStatus(postId)
  }
  
  return (
    <>
      {posts && posts.map((post: IPost) => (
        <Post post={post} key={post.id} action={updatePost}/>
      ))}
    </>
  )
}

export default Posts