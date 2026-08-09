import { Link } from "react-router-dom";
import "../../styles/error.scss"


function Error (){
    return (
        <main className="error">
            <h1>404</h1>
            <p>Oups la page que vous demandez n'existe pas.</p>
                <Link to="/">Retournez sur la page d'accueil</Link>
        </main>
    )
} 

export default Error;