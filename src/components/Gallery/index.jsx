import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

import "../../styles/gallery.scss";

function Gallery({ pictures }) {
  const [imageIndex, setImageIndex] = useState(0);

  function suivant() {
    if (imageIndex === pictures.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  function precedent() {
    if (imageIndex === 0) {
      setImageIndex(pictures.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <div className="gallery-logement">

      <img
        className="gallery-logement__image"
        src={pictures[imageIndex]}
        alt=""
      />

      {pictures.length > 1 && (
        <>
          <button
            className="gallery-logement__previous"
            onClick={precedent}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <button
            className="gallery-logement__next"
            onClick={suivant}
            aria-label="Image suivante"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <span className="gallery-logement__counter">
            {imageIndex + 1} / {pictures.length}
          </span>
        </>
      )}

    </div>
  );
}

export default Gallery;