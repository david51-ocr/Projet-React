import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/collapse.scss"
function Collapse({ titre, contenu }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <article className="collapse">
      <button type="button" onClick={toggleCollapse}>
        {titre}
        <FontAwesomeIcon icon={faChevronUp} 
        className={isOpen ? "collapse__icon open" : "collapse__icon"}
        />

      </button>

    <div
        className={
            isOpen
                ? "collapse__content open"
                : "collapse__content "
        }
    >
        <p>{contenu}</p>
    </div>
    </article>
  );
}

export default Collapse;