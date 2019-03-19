export async function fetchPostList()
{
    try {
        const response = await fetch('http://localhost:30001/posts')
        return response.json()
    } catch {
        return null
    }
}