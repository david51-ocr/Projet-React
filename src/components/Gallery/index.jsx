import { useState } from "react";


function Gallery({pictures}){
    const [imageIndex, setImageIndex] = useState(0);
   function suivant() {
    if (imageIndex === pictures.length - 1) {
        setImageIndex(0);
    } else {
        setImageIndex(imageIndex + 1);
    }
}
   function précédent() {
    if (imageIndex ===0) {
        setImageIndex(pictures.length - 1);
    } else {
        setImageIndex(imageIndex - 1);
    }
}
    return(
       
       <div>
<img src={pictures[imageIndex]} alt="" /> 

 {pictures.length >1 &&(
    <>
<button onClick={précédent}>Précédent</button>
<button onClick={suivant}>Suivant</button>
</>
)}
</div>
)}

export default Gallery