import { useEffect, useState } from "react";
import Card from "../../components/Card"
import "../../styles/home.scss"
import Image from "../../assets/Img-header.png"
function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <main>
      <div className="bannerAccueil">
  <img src={Image} alt="Paysage accueil" />
  <h1>Chez vous, partout et ailleurs</h1>
</div>
      <section className="gallery">
        {logements.map((logement) => (
          <Card 
            key={logement.id}
            id={logement.id}
            titre={logement.title}
            image={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;