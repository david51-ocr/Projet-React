function Card({ titre, image }) {
  return (
    <article className="card">
      <img src={image} alt={titre} />
      <h2>{titre}</h2>
    </article>
  );
}

export default Card;