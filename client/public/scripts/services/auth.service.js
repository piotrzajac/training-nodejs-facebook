const authAddress = 'http://localhost:3002'

export async function authenticate(login, password) {
    try {
        const response = await fetch(
            authAddress, {
                method: "POST",
                body: new URLSearchParams({ "login": login, "password": password })
            })
        return response.json()
    } catch (err) {
        return null
    }
}