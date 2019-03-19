export async function fetchPostList()
{
    try {
        const response = await fetch('http://localhost:3000/posts')
        return response.json()
    } catch {
        return null
    }
}