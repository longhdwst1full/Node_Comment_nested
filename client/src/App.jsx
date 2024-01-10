import { createBrowserRouter } from "react-router-dom"

import { Post } from "./component/Post"
import { PostList } from "./component/PostList"
import PostProvider from "./context/PostContext"


export const router = createBrowserRouter([
  { path: "", element: <PostList /> },
  {
    path: "/posts/:id",
    element: <PostProvider>
      <Post />
    </PostProvider>
  }
])
