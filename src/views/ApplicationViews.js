import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { PostDetails } from "../components/posts/PostDetails"
import { CategoryList } from "../components/categories/CategoryList"
import { AddPost } from "../components/posts/PostForm"
import { AllPosts } from "../components/posts/PostList"
import { TagList } from "../components/tags/TagList"
import { Authorized } from "./Authorized"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>

        <Route path="/tags" element={<TagList />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
        <Route path="/tags" element={<TagList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/newPosts" element={<AddPost/>} />

      </Route>
    </Routes>
  </>
}
