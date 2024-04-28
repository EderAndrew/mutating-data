import { formatDate } from '@/lib/format'
import React from 'react'
import LikeButton from './like-icon'
import { IPost } from '@/interfaces/post'

const Posts = ({posts}:{posts:IPost}) => {
  return (
    <article className="post">
        <div className="post-image">
        <img src={posts.image} alt={posts.title} />
        </div>
        <div className="post-content">
        <header>
            <div>
            <h2>{posts.title}</h2>
            <p>
                Shared by {posts.userFirstName} on{' '}
                <time dateTime={posts.created_at}>
                {formatDate(posts.created_at)}
                </time>
            </p>
            </div>
            <div>
            <LikeButton />
            </div>
        </header>
        <p>{posts.content}</p>
        </div>
    </article>
  )
}

export default Posts