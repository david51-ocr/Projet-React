import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Gallery from "../../components/Gallery";
import Error from "../Error";
import "../../styles/logement.scss"
import { icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";



function Logement() {
  const { id } = useParams();

  const [logement, setLogement] = useState(null);

   useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setLogement(data));
  }, [id]);
  if (logement === null) {
    return <p>Chargement...</p>;
  }

    if (!logement.id) {
    return <Error />;
  }

 
 return (
  <main className="logement">
    <Gallery pictures={logement.pictures} />

    <section className="logement__informations">
      <div className="logement__details">
        <h1>{logement.title}</h1>

        <p className="logement__location">
          {logement.location}
        </p>

        <div className="logement__tags">
          {logement.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="logement__hostRating">
        <div className="logement__host">
          <p>{logement.host.name}</p>

          <img
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>

        <div className="logement__rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
              key={star}
              icon={faStar}
              className={
                star <= logement.rating
                  ? "star active"
                  : "star"
              }
            />
          ))}
        </div>
      </div>
    </section>

    <section className="logement__collapses">
      <Collapse
        titre="Description"
        contenu={logement.description}
      />

      <Collapse
        titre="Équipements"
        contenu={
          <ul>
            {logement.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        }
      />
    </section>
  </main>
)};

export default Logement;