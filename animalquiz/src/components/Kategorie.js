import animals from "./../animals.json";
import { useNavigate } from "react-router-dom";

function Kategorie({ setKategorie }) {
  const navigate = useNavigate();

  function kategorieAuswalen(e) {
    console.log(e.currentTarget.id);
    navigate("/Fragen");
    setKategorie(e.currentTarget.id);
  }

  return (
    <div>
      <button onClick={kategorieAuswalen} id="speed">
        Geschwindigkeit
      </button>
      <button onClick={kategorieAuswalen} id="Weight">
        Gewicht
      </button>
      <button onClick={kategorieAuswalen} id="Height">
        Höhe
      </button>
      <button onClick={kategorieAuswalen} id="Length">
        Length
      </button>
      <button onClick={kategorieAuswalen} id="Lifespan">
        Lebensdauer
      </button>
    </div>
  );
}

export default Kategorie;
