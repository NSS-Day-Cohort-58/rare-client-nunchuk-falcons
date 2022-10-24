export const getPosts = () => {
    return fetch('http://localhost:8088/posts')
        .then(response => response.json())
}

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE"
    })
}

export const saveEditedPost = (post) => {
    return fetch(`http://localhost:8088/posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
}