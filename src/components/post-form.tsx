'use client'
import { useFormState } from "react-dom";
import FormSubmit from "./form-submit";

type Props = {
    action: (prevData: any, data: FormData) => Promise<{errors: string[]}>
}
const PostForm = ({action}:Props) => {
    const [state, formAction] = useFormState(action as any, {})
  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows={5} />
        </p>
        <p className="form-actions">
          <button type="reset">Reset</button>
          <FormSubmit>Create Post</FormSubmit>
        </p>
        {/* {state.errors && <ul className="form-errors">
            {state.errors.map((error) => <li key={error}>{error}</li>)}
          </ul>} */}
      </form>
    </>
  );
}

export default PostForm