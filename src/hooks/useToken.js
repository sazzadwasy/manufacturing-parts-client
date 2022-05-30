import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = { email: email }
        if (email) {
            fetch(`https://fathomless-falls-46329.herokuapp.com/user/login/${email}`, {
                method: "PUT",
                headers: {
                    'content-typle': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('insite usetoken', data)
                    const accessToken = data.token
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)

                })
        }
    }, [user])
    return [token]
}

export default useToken