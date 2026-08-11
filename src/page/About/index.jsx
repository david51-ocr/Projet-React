import Collapse from "../../components/Collapse";
import paysage from "../../assets/paysage.png"
import "../../styles/about.scss"
function About() {
  return (
    <main>
      <section className="about">
        <img src={paysage} alt="paysage" />
        <section className="aboutCollapse">
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
      </section>
    </main>
  );
}

export default About;