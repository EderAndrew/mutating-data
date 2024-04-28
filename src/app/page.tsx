import Posts from '@/components/posts';
import { IPost } from '@/interfaces/post';
import { getPosts } from '@/lib/posts';
import React, { Suspense } from 'react'

async function LatestPosts() {
  const latestPosts = await getPosts(2) as unknown as IPost;
  return <Posts posts={latestPosts} />;
}

const Home = () => {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
      <Suspense fallback={<p>Loading recent posts...</p>}>
        <LatestPosts />
      </Suspense>
      </section>
    </>
  )
}

export default Home