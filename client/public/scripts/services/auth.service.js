const authAddress = 'http://localhost:3002';

export async function authenticate(login, password)
{
    try {
        const response = await fetch(
            authAddress,
            {
                method: "POST",
                body: new URLSearchParams({ "login": login, "password": password }).toString(),
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            })
        return response.json()
    } catch {
        return null
    }
}