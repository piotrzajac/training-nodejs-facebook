export async function fetchPostList()
{
    const response = await fetch('http://localhost:3000/posts')
    return response.json()
}