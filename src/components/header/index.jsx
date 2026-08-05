import { NavLink } from "react-router-dom";
import logoKasa from "../../assets/Logo-Kasa.png";
import  "../../styles/header.scss";


function Header (){
    return(
        <header className="header">
    <img className="logo" src={logoKasa} alt="Logo kasa" />

    <nav className="navContent">
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
        >
            Accueil
        </NavLink>

        <NavLink
            to="/about"
            className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
        >
            À propos
        </NavLink>
    </nav>
</header>
    )}
    export default Header