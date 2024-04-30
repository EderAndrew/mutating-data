import React from 'react'
import Image from 'next/image'
import LikeButton from './like-icon'
import { IPost } from '@/interfaces/post'
const Post = ({post, action}:{post: IPost, action: any}) => {
  return (
    <article className="post">
        <div className="post-image">
        <Image src={post?.image} alt={post?.title} width={300} height={200}/>
        </div>
        <div className="post-content">
        <header>
            <div>
            <h2>{post?.title}</h2>
            <p>
                Shared by {post?.userFirstName} on{' '}
                <time dateTime={post?.createdAt}>
                {post?.createdAt}
                </time>
            </p>
            </div>
            <div>
              <form action={action.bind(null, post?.id as unknown as string)} className={post.isLiked ? 'liked' : ''}>
                <LikeButton />
              </form>
            </div>
        </header>
        <p>{post?.content}</p>
        </div>
    </article>
  )
}

export default Post