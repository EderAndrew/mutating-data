import PostForm from '@/components/post-form';
import { storePost } from '@/lib/posts';
import { redirect } from 'next/navigation';

const NewPostPage = () => {
  
  async function createPost(prevState: any, formData: FormData) {
    "use server";
    const title = formData.get('title') as string;
    const image = formData.get('image') as string;
    const content = formData.get('content') as string;

    let errors = []

    if(!title || title.trim().length === 0) {
      errors.push("Title is required.")
    }

    if(!content || content.trim().length === 0) {
      errors.push("Content is required.")
    }

    if(!image) {
      errors.push("Image is required.")
    }

    if(errors.length > 0){
      return { errors }
    }

    await storePost({
      imageUrl: '',
      title,
      content,
      userId: 1
    })

    redirect('/feed')
  }

  return <PostForm action={createPost} />
}

export default NewPostPage
