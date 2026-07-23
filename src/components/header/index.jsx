import { Link } from "react-router-dom";
import logoKasa from "../../assets/Logo-Kasa.png";
import "./header.scss"

function Header (){
    return(
        <header className="header">
            <img className="logo" src={logoKasa} alt="Logo kasa" />
            <nav className="navContent">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/about" className="nav-link">A propos</Link>
            </nav>
        </header>
    )
}
    export default Header