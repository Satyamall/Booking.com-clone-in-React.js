import { useState } from "react"
import { Logout } from "../Login/Login"
import styles from "./Profile.module.css"


export const Profile = () => {
    const data = JSON.parse(localStorage.getItem("login"))
    const [logout, setLogout] = useState(false)
    let userData
    if (data) {
        userData = data
    }
    else {
        userData = {
            imageUrl: "#",
            name: ""
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("login")
        alert("Successfully Logged Out")
        document.location.href = "http://localhost:3000/"
    }

    return <>
        <div className={styles.profile} onClick={() => setLogout(!logout)}>
            <div>
                <img src={userData.imageUrl} alt="userprofile" />
            </div>
            <div>
                <h4>{userData.name}</h4>
            </div>
        </div>
        {

            logout && <div className={styles.logout} onClick={() => handleLogout()} >
                <Logout />
            </div>
        }

    </>
}