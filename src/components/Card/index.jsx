import { Link } from "react-router-dom"
function Card({ id,titre, image }) {
  return (
  <Link to={`/logement/${id}`}>
    <article className="card">
      <img src={image} alt={titre} />
      <h2>{titre}</h2>
    
    </article>
    </Link>
  );

}

export default Card;