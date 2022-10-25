export const getTags = () => {
    return fetch(`http://localhost:8088/tags`)
        .then(res => res.json())
}

export const getTagById = (id) => {
    return fetch(`http://localhost:8088/tags/${id}`)
        .then(res => res.json())
}

export const createTag = (tag) => {
    return fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
}

export const saveEditedTag = (tag) => {
    return fetch(`http://localhost:8088/tags/${tag.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })
}
