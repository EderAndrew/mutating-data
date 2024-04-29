import { formatDate } from '@/lib/format'
import React from 'react'
import LikeButton from './like-icon'
import { IPost } from '@/interfaces/post'
import Image from 'next/image'

const Posts = ({post}:{post:IPost}) => {
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
            <LikeButton />
            </div>
        </header>
        <p>{post?.content}</p>
        </div>
    </article>
  )
}

export default Posts