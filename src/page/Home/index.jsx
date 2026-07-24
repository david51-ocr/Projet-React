import { useEffect, useState } from "react";
import Card from "../../components/Card"

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data));
  }, []);

  return (
    <main>
      <section className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            titre={logement.name}
            image={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;