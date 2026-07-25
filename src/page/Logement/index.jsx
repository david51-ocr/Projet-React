import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../components/Collapse";
import Error from "../Error";



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

  return (
    <main>
      <h1>{logement.title}</h1>
      <h2>{logement.location}</h2>
      <p>{logement.tags}</p>
      <Collapse
      titre="Description"
      contenu={logement.description}/>
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
    </main>
  );
}

export default Logement;