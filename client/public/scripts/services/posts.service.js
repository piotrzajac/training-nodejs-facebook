export async function fetchPostList()
{
    try {
        const response = await fetch('http://localhost:3000/posts')
        return response.json()
    } catch {
        return null
    }
}

export async function fetchPostById(postId)
{
    try {
        const response = await fetch(`http://localhost:3000/posts/${postId}`)
        return response.json()
    } catch {
        return null
    }
}