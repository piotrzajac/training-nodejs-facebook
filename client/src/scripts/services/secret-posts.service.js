const credentials = {
    login: 'root',
    password: 'root',
}

export async function fetchSecretPostList() {
    try {
        const response = await fetch(
            'http://localhost:3000/secret/posts', {
                method: 'POST',
                body: new URLSearchParams(credentials)
            }
        )
        return response.json()
    } catch (err) {
        return null
    }
}

export async function fetchSecretPostById(postId) {
    try {
        const response = await fetch(
            `http://localhost:3000/secret/posts/${postId}`, {
                method: 'POST',
                body: new URLSearchParams(credentials)
            }
        )
        return response.json()
    } catch (err) {
        return null
    }
}