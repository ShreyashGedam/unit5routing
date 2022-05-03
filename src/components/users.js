import { useEffect, useState } from "react"

import { Link } from "react-router-dom"

export const Users = () =>
{

    const [user , setUser] = useState([])

    useEffect( async function()
    {
        var res = await fetch("https://reqres.in/api/users")
        var data = await res.json()
        setUser(data.data)
    } , [])

    return (
        <div>
            {user.map( (user) =>
            (
                <Link to={`/users/${user.id}`} >{user.id}. {user.first_name}</Link>
            ))}
        </div>
    )
}