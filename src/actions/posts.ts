"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createPost =  async(prevState: any, formData: FormData) => {
    
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
    let imageUrl
    try{
        imageUrl = await uploadImage(image)
    }catch(err){
        throw new Error('Failed to upload image')
    }

    await storePost({
      imageUrl: imageUrl,
      title,
      content,
      userId: 1
    })

    revalidatePath("/", "layout")
    redirect('/feed')
  }

  export const togglePostLikeStatus = async (postId: string, _formData?: FormData) => {
    updatePostLikeStatus(postId, "2");
    revalidatePath("/", "layout")
  }