import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCategories } from "../../managers/CategoryManager"
import { PostEdit } from "./PostEdit"
import { getPostById, saveEditedPost, deletePost } from "../../managers/PostsManger"
import "./Posts.css"

export const PostDetails = () => {

    const navigate = useNavigate()
    const { postId } = useParams()
    const [categories, setCategories] = useState([])
    const [clickStatus, updateClickStatus] = useState(false)
    const [post, setPost] = useState({
        user_id: 0,
        category_id: 0,
        title: "",
        publication_date: "",
        image_url: "",
        content: "",
        approved: false
    })

    const localForumUser = localStorage.getItem("forum_user")
    const forumUserObject = JSON.parse(localForumUser)

    const renderPost = () => {
        if (postId) {
            getPostById(postId).then((res) => {
                setPost(res)
            })
        }
    }

    useEffect(
        () => {
            getCategories()
                .then(data => setCategories(data))
        },
        []
    )

    useEffect(() => {

        renderPost()

    }, [postId])

    const confirmDelete = (evt, post) => {
        let text = 'Are you sure you want to delete'
        window.confirm(text)
            ? deletePost(post.id).then(() => navigate("/posts"))
            : <></>
    }


    const defaultDisplay = () => {
        return <article className="post_details" >
            <button type="button" className="btn__navigate" onClick={() => navigate("/posts")}>Back to Post</button>
            < section className="postDetails columns box" id="posts__postDetails" >
                <div className="details__title column">Title: {post.title}</div>
                <div className="details__author--name column">Author: {post.user_id}</div>
                <div className="details__category column">Category: {post.category_id}</div>
                <div className="details__publication--date column">Publication Date: {post.publication_date}</div>
                <div className="details__content column">Content: {post.content}</div>

                <div className="column">
                    <button onClick={() => updateClickStatus(true)}>Edit Post</button>
                </div>

                <div className="column">
                    {
                        post.user_id === forumUserObject.id
                            ? <button className="btn_delete-post" onClick={(evt) => { confirmDelete(evt, post) }}>DELETE</button>
                            : <></>
                    }
                </div>

            </section >
        </article >
    }

    return <main>
        <h2>Post Details:</h2>
        {
            clickStatus
                ? <PostEdit post={post}
                    setPost={setPost}
                    renderPost={renderPost}
                    categories={categories}
                    updateClickStatus={updateClickStatus} />
                : defaultDisplay()
        }
    </main>

}