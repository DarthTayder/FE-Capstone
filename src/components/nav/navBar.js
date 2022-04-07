import React from "react"
import { Link } from "react-router-dom"
import styles from "./navBar.css"
import { useHistory } from "react-router-dom"
import "./navBar.css"



export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/localTrails">Local Trails</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/goals">My Goals</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myTrails">My Trails</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/createTrail">Create Trail</Link>
            </li>
            
            <li className="navbar__item">
                <Link className="navbar__link" to="#"
                onClick={
                    () => {
                        localStorage.removeItem("user")
                        history.push("/")
                    }
                }>Logout
                </Link>
            </li>
        </ul>
    )
}