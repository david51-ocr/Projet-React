import Collapse from "../../components/Collapse";

function About() {
  return (
    <main>
      <section className="about">
        <Collapse
          titre="Fiabilité"
          contenu="Les annonces postées sur Kasa garantissent une fiabilité totale."
        />

        <Collapse
          titre="Respect"
          contenu="La bienveillance fait partie des valeurs fondatrices de Kasa."
        />

        <Collapse
          titre="Service"
          contenu="Notre équipe est disponible pour accompagner les utilisateurs."
        />

        <Collapse
          titre="Sécurité"
          contenu="La sécurité est la priorité de Kasa."
        />
      </section>
    </main>
  );
}

export default About;