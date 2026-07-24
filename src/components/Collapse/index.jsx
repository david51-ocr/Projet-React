import { useState } from "react";

function Collapse({ titre, contenu }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <article className="collapse">
      <button type="button" onClick={toggleCollapse}>
        {titre}
      </button>

      {isOpen && (
        <div className="collapse__content">
          <p>{contenu}</p>
        </div>
      )}
    </article>
  );
}

export default Collapse;