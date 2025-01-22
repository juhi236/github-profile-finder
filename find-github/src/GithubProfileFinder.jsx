import { useState, useEffect } from "react"
import User from "./User"
import './styles.css'


export default function GithubProfileFinder() {

    const [userName, setUserName] = useState('juhi236')
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false)


    async function fetchGithubUser() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()


        if (data) {
            setUserData(data)
            setLoading(false)
            setUserName('')
        }




    }

    function handleSubmit() {
        fetchGithubUser()
    }

    useEffect(() => {
        fetchGithubUser()
    }, [])

    if (loading) {
        return <h1>Loading Data! Please wait!</h1>
    }


    return <div className="github-profile-container">
        <div className="input-wrapper">
            <input type="text"
                name="search-by-username"
                placeholder="Enter Github Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData} /> : null
        }
    </div>
}
