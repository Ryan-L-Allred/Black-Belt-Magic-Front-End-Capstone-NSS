import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
             <li className="navbar__item active">
                <Link className="navbar__link" to="/">Homepage</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/questions">Questions</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/answers">Answers</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("black_belt_user")
                    navigate("/", {replace: true})
                }}>Logout</Link>
            </li>
        </ul>
    )
}