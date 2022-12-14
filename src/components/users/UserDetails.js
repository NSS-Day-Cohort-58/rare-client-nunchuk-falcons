import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUsers, getUserById } from "../../managers/UserManager"
import "./UserDetails.css"

export const UserDetails = () => {
    const { userId } = useParams()
    const [user, setUsers] = useState([])
    const navigate = useNavigate()

useEffect(
    () => {
    fetch(`http://localhost:8088/users/${userId}`)
    .then(res => res.json())
    .then((userArray) => {
        setUsers(userArray)
    })
},
[userId]
)

    
    return <section className="user-details"> <div className="user-details_title">Rare User Details</div>
        <button className="btn-all-users"
         onClick={() => navigate(`/users`)}
         >All Users</button>

    <section key={`user--${user.id}`} className="user" to={`/users/${user.id}`}>
    <div className="user-username">Username: {user.username}</div>
    <div className="user-name">Name: {user.first_name} {user.last_name} </div>
    <img className="user-image" src={user.profile_image_url}/>
    <div className="user-creation">Profile Creation Date: {user.created_on}</div>
    <div className="user-bio">Bio: {user.bio}</div>
    <button className="btn-userSubscribe">Subscribe</button>
    <button className="btn-userSubscribe">Unsubscribe</button>
    </section>
    
</section>
}