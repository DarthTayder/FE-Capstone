import React from "react"
import { Link } from "react-router-dom"
import styles from "./navBar.css"

export const NavBar = () => {
    return (
        <ul className={styles.NavBar}>
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
                        localStorage.removeItem("")
                    }
                }>Logout
                </Link>
            </li>
        </ul>
    )
}